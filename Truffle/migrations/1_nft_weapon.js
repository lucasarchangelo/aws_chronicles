const NFTWeapon = artifacts.require("NFTWeapon");

module.exports = async function (deployer, _network, accounts) {
    await deployer.deploy(NFTWeapon);
};