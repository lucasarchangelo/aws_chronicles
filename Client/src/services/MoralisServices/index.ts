import Moralis from 'moralis';

export const MoralisServices = {
    getNftCollection: async (nftAddress: string, userWallet: string) => {
        try {
            await Moralis.start({
                apiKey: "YOUR_APPKEY"
            });

            const response = await Moralis.EvmApi.nft.getWalletNFTs({
                "chain": "0x13881",
                "format": "decimal",
                "tokenAddresses": [
                    nftAddress
                ],
                "mediaItems": false,
                "address": userWallet
            });

            console.log(response.raw);
        } catch (e) {
            console.error(e);
        }
    }
}
