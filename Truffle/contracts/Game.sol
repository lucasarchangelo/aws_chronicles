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
    uint8 difficulty;
    uint256 nftPrice;
    uint256 nftUpgrade;

    event NFTBought(
        address indexed owner,
        uint256 tokenId
    );

    event Upgrade(
        address indexed owner,
        uint8 luckValue,
        uint256 nftId,
        uint256 chainlinkId
    );

    event UpgradeFail(
        address indexed owner,
        uint8 luckValue,
        uint256 nftId,
        uint256 chainlinkId,
        uint8 resultValue
    );

    event UpgradeSuccess(
        address indexed owner,
        uint8 luckValue,
        uint256 nftId,
        uint256 chainlinkId,
        uint8 resultValue
    );


    constructor(
        address _nftWeaponAddress,
        uint64 _subscriptionId,
        address _cordinatorAddress,
        bytes32 _keyHash,
        uint256 _nftPrice,
        uint256 _upgradePrice,
        uint8 _difficulty
    ) VRFV2Consumer(_subscriptionId, _cordinatorAddress, _keyHash) {
        gameAddress = IERC721Weapon(_nftWeaponAddress);
        
        nftPrice = _nftPrice;
        nftUpgrade = _upgradePrice;
        difficulty = _difficulty;
    }

    function forgeUpgradeWeapon(uint256 _tokenId, uint8 _luckValue) external payable {
        require(gameAddress.ownerOf(_tokenId) == msg.sender);
        require(_luckValue < difficulty);
        require(msg.value == nftUpgrade);

        uint256 chainlinkRequest = requestRandomWords(1);
        upgrades[chainlinkRequest].tokenId = _tokenId;
        upgrades[chainlinkRequest].luckValue = _luckValue;
    }

    function buyWeapon() external payable {
        require(msg.value == nftPrice);
        uint256 tokenId = gameAddress.safeMint(msg.sender);
        emit NFTBought(msg.sender, tokenId);
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        super.fulfillRandomWords(_requestId, _randomWords);
        if ((_randomWords[0] % difficulty) == upgrades[_requestId].luckValue) {
            gameAddress.levelUp(upgrades[_requestId].tokenId);
            emit UpgradeSuccess(
                upgrades[_requestId].sender,
                upgrades[_requestId].luckValue,
                upgrades[_requestId].tokenId,
                _randomWords[0] % difficulty
            );
        } else {
            gameAddress.burn(upgrades[_requestId].tokenId);
            emit UpgradeFail(
                upgrades[_requestId].sender,
                upgrades[_requestId].luckValue,
                upgrades[_requestId].tokenId,
                _randomWords[0] % difficulty
            );
        }
    }

    function setDifficulty(uint8 newValue) external onlyOwner {
        difficulty = newValue;
    }

    function setNftPrice(uint256 newValue) external onlyOwner {
        nftPrice = newValue;
    }

    function setNftUpgrade(uint256 newValue) external onlyOwner {
        nftUpgrade = newValue;
    }

    // This method is just for test
    function getFunds() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
