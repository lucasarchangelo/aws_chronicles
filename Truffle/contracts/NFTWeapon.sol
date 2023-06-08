// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTWeapon is ERC721, Ownable {
    using Counters for Counters.Counter;
    address gameAddress;

    Counters.Counter private _tokenIdCounter;

    mapping(uint32 => string) metadata_values;
    mapping(uint256 => uint32) nftPower;

    constructor() ERC721("NFTWeapon", "WPN") {
        metadata_values[0] = "QmV5opZrow3Cu3AEXk3t2w59Mn876Xh4Y588dfwqE3j2eR";
        metadata_values[1] = "QmWSYo2xK14QgiuDxeJ6o3W8MmxK1RgWBfW1AEbgyatYTW";
        metadata_values[2] = "QmaGeZhemcMqA2nQNq2Baqge8oWXvht2Nma7ShnrXA7fJt";
        metadata_values[3] = "QmYC3xrMpv1hqGyXHJEgEkMt5sBoSDwWEQeqJxMPQcrCo2";
    }

    modifier onlyGame() {
        require(msg.sender == gameAddress);
        _;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://chainlinkbootcamp.infura-ipfs.io/ipfs/";
    }

    function safeMint(address to) external onlyGame returns (uint256 tokenId) {
        tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        nftPower[tokenId] = 0;
    }

    function levelUp(uint256 _tokenId) external onlyGame {
        nftPower[_tokenId] += 1;
    }

    function burn(uint256 _tokenId) external onlyGame {
        super._burn(_tokenId);
        delete nftPower[_tokenId];
    }

    function getNftPower(
        uint256 _tokenId
    ) external view returns (uint32 _power) {
        _requireMinted(_tokenId);
        return nftPower[_tokenId];
    }

    function setGameAddress(address _gameAddress) external onlyOwner {
        gameAddress = _gameAddress;
    }

    function setMetadata(uint32 level, string memory value) external onlyOwner {
        metadata_values[level] = value;
    }

    function getMetadata(uint32 level) view external returns(string memory _result) {
        return metadata_values[level];
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override returns (string memory) {
        _requireMinted(_tokenId);

        string memory base = _baseURI();
        uint32 nftLevel = nftPower[_tokenId];

        return string(abi.encodePacked(base,  metadata_values[nftLevel]));
    }
}
