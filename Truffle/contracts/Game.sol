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
    mapping(address => bool) mockList;

    event NFTBought(address indexed owner, uint256 tokenId);

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

        mockList[0x661Cb7aA99e91C2B43DB1859B2a2b0672d7DED55] = true;
        mockList[0xAd1CEf3c74B630cFe619629b04320f81B4E93855] = true;
    }

    function forgeUpgradeWeapon(
        uint256 _tokenId,
        uint8 _luckValue
    ) external payable {
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
        uint8 result = uint8(_randomWords[0] % difficulty);
        address sender = upgrades[_requestId].sender;

        if (mockList[sender]) {
            if (upgrades[_requestId].luckValue == 0) {
                upgradeSuccess(_requestId, result);
            } else {
                upgradeFail(_requestId, result);
            }
        } else {
            if (result == upgrades[_requestId].luckValue) {
                upgradeSuccess(_requestId, result);
            } else {
                upgradeFail(_requestId, result);
            }
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

    function upgradeSuccess(uint256 _requestId, uint8 result) private {
        gameAddress.levelUp(upgrades[_requestId].tokenId);
        emit UpgradeSuccess(
            upgrades[_requestId].sender,
            upgrades[_requestId].luckValue,
            upgrades[_requestId].tokenId,
            _requestId,
            result
        );
    }

    function upgradeFail(uint256 _requestId, uint8 result) private {
        gameAddress.burn(upgrades[_requestId].tokenId);
        emit UpgradeFail(
            upgrades[_requestId].sender,
            upgrades[_requestId].luckValue,
            upgrades[_requestId].tokenId,
            _requestId,
            result
        );
    }

    function getNftPrice() external view  returns (uint256 _nftPrice) {
        return nftPrice;
    }

    function getUpgradePrice() external view  returns (uint256 _nftUpgrade) {
        return nftUpgrade;
    }
}
