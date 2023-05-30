// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IERC721Weapon.sol";
import "./VRFV2Consumer.sol";

contract Game is Ownable, ReentrancyGuard, VRFV2Consumer {
    IERC721Weapon gameAddress;

    struct Upgrades {
        uint256 tokenId;
        uint8 luckValue;
        address sender;
    }

    mapping(uint256 => Upgrades) upgrades;
    uint8 difficulty = 4;

    constructor(
        address _nftWeaponAddress,
        uint64 _subscriptionId,
        address _cordinatorAddress,
        bytes32 _keyHash
    ) VRFV2Consumer(_subscriptionId, _cordinatorAddress, _keyHash) {
        gameAddress = IERC721Weapon(_nftWeaponAddress);
    }

    function forgeUpgradeWeapon(uint256 _tokenId, uint8 _luckValue) external payable {
        require(gameAddress.ownerOf(_tokenId) == msg.sender);
        require(_luckValue < difficulty);

        uint256 chainlinkRequest = requestRandomWords(1);
        upgrades[chainlinkRequest].tokenId = _tokenId;
        upgrades[chainlinkRequest].luckValue = _luckValue;
    }

    function buyWeapon() external payable {
        gameAddress.safeMint(msg.sender);
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        super.fulfillRandomWords(_requestId, _randomWords);
        if ((_randomWords[0] % difficulty) == upgrades[_requestId].luckValue) {
            gameAddress.levelUp(upgrades[_requestId].tokenId);
        } else {
            gameAddress.burn(upgrades[_requestId].tokenId);
        }
    }

    function setDifficulty(uint8 newValue) external onlyOwner {
        difficulty = newValue;
    }
}
