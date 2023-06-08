const NFTWeapon = artifacts.require("NFTWeapon");

module.exports = async function (callback) {
    const accounts = await web3.eth.getAccounts();
    const _instanceNFTWeapon = await NFTWeapon.deployed();

    try {
        console.log("Configure game address for test");
        await _instanceNFTWeapon.setGameAddress(accounts[0]);

        console.log("Creating Weapons");
        for (let i = 0; i < 4; i++) {
            await _instanceNFTWeapon.safeMint(accounts[0]);
        }
        
        console.log(`NFT created for wallet ${accounts[0]}`);
        
        console.log("Upgrading Weapons");
        console.log("Upgrading ID #0");
        for (i = 0; i < 3; i++) {
            await _instanceNFTWeapon.levelUp(0);
            console.log(`Upgrade to lvl ${i}`);
        }

        console.log("Upgrading ID #1");
        for (i = 0; i < 2; i++) {
            await _instanceNFTWeapon.levelUp(1);
            console.log(`Upgrade to lvl ${i}`);
        }

        console.log("Upgrading ID #2");
        for (i = 0; i < 1; i++) {
            await _instanceNFTWeapon.levelUp(2);
            console.log(`Upgrade to lvl ${i}`);
        }

    } catch (err) {
        console.error(err);
    }

    callback();
}