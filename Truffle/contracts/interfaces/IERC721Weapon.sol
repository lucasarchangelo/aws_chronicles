// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IERC721Weapon is IERC721 {
    function safeMint(address to) external returns(uint256 tokenId);
    function burn(uint256 _tokenId) external;
    function levelUp(uint256 _tokenId) external;
    function getNftPower(uint256 _tokenId) external view returns(uint32 _power);
}