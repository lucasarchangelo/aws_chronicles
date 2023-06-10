import Moralis from "moralis";
import NFTWeapon from "../../../contracts/NFTWeapon.json";

let moralisInitialized = false;

export const MoralisServices = {
  getNftCollection: async (userWallet: string, apiKey: string) => {
    try {
      if (!moralisInitialized) {
        await Moralis.start({
          apiKey,
        });
        moralisInitialized = true;
      }

      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        chain: "0x13881",
        format: "decimal",
        tokenAddresses: [NFTWeapon.networks["80001"].address],
        mediaItems: false,
        address: userWallet,
      });

      return response;
    } catch (e) {
      console.error(e);
      throw new Error("Error fetching NFTs");
    }
  },
};
