const Game = artifacts.require("Game");
const NFTWeapon = artifacts.require("NFTWeapon");

module.exports = async function (deployer, _network, accounts) {

    switch (_network) {
        case "matic": {
            _subscriptionId = "671";
            _coordinatorId = "0xae975071be8f8ee67addbc1a82488f1c24858067";
            _keyHash = "0xcc294a196eeeb44da2888d17c0625cc88d70d9760a69d58d853ba6581a9ab0cd";
            break;
        }
        case "mumbai": {
            _subscriptionId = "3262";
            _coordinatorId = "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed";
            _keyHash = "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
            break;
        }
        default: {
            _subscriptionId = "3262";
            _coordinatorId = "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed";
            _keyHash = "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
            break;
        }
    }

    const nftWeaponInstance = await NFTWeapon.deployed();

    await deployer.deploy(Game,
        nftWeaponInstance.address,
        _subscriptionId,
        _coordinatorId,
        _keyHash,
    );

    const gameInstance = await Game.deployed();
    await nftWeaponInstance.setGameAddress(gameInstance.address);
};