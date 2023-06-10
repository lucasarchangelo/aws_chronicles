import { rightChainId } from "@/constants";
import { ethers } from "ethers";
import { changeNetwork } from "@/functions/changeNetwork";

export const AuthServices = {
  connect: async (provider: ethers.BrowserProvider) => {
    console.log("Parou antes do provider.getNetwork")
    const provider1 = new ethers.BrowserProvider(window.ethereum)

    const network = await provider1.getNetwork();

    if (network.chainId === rightChainId) {
    console.log("ChainID está certo, conectou!")
      const [wallet] = await provider1.send("eth_requestAccounts", []);
      return wallet;
    }

    try {
      await changeNetwork(provider, rightChainId);
    } catch (switchError: any) {
      if (switchError.code === 4902) {
        return null;
      }
      throw switchError;
    }

    const [wallet] = await provider.send("eth_requestAccounts", []);
    return wallet;
  },
  getConnectedWallet: async (provider: ethers.BrowserProvider) => {
    try {
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        return accounts[0];
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};