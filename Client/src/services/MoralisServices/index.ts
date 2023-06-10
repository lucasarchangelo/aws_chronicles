import Moralis from "moralis";
import NFTWeapon from "../../../contracts/NFTWeapon.json";

let moralisInitialized = false;

export const MoralisServices = {
  getNftCollection: async (userWallet: string) => {
    try {
      if (!moralisInitialized) {
        await Moralis.start({
          apiKey: process.env.MORALIS_API_KEY,
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
    } catch (e: any) {
      throw new Error(e);
    }
  },
};
