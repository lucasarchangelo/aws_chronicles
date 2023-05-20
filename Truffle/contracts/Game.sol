// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IERC721Weapon.sol";
import "./VRFV2Consumer.sol";

contract Game is ReentrancyGuard, VRFV2Consumer {
    IERC721Weapon gameAddress;
    mapping (uint256 => uint256) upgrades;
    uint8 difficulty = 6;
    uint8 luckValue = 1;

    constructor(
        address _nftWeaponAddress,
        uint64 _subscriptionId,
        address _cordinatorAddress,
        bytes32 _keyHash
    ) VRFV2Consumer(_subscriptionId, _cordinatorAddress, _keyHash) {
        gameAddress = IERC721Weapon(_nftWeaponAddress);
    }

    function forgeUpgradeWeapon(bool _isUpgrade, uint256 _tokenId) external {
        if(!_isUpgrade) {
            _tokenId = gameAddress.safeMint(msg.sender);
        }
        require(gameAddress.ownerOf(_tokenId) == msg.sender);
        uint256 chainlinkRequest = requestRandomWords(1);
        upgrades[chainlinkRequest] = _tokenId;
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        super.fulfillRandomWords(_requestId, _randomWords);
        
        if((_randomWords[0] % difficulty) == luckValue) {
            gameAddress.levelUp(upgrades[_requestId]);
        }
    }
}
