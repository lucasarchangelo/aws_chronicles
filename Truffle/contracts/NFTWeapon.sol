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
        metadata_values[0] = "QmSDQpmDqQNHB2ExYBvocEJXw4fLT6oRjGDDDaTA5huLeW";
        metadata_values[1] = "QmPZLRNkjYrwELfN4WSrZpZndfrJqfu6J5y1VdhjdtWq7M";
        metadata_values[2] = "QmcrMCZ78fd64h81AU4mAUQYjXCnTcBTLX9Q5VjN2BsokN";
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

    function setMetadata(uint32 level, string value) external onlyOwner {
        metadata_values[level] = value;
    }

    function getMetadata(uint32 level) view external returns(string _result) {
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
