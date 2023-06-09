import { AuthServices } from "@/services/AuthServices";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

declare global {
  interface Window {
    ethereum: any;
  }
}

type EthersStore = {
  provider: any;
  currentWallet: string | any;
  chainId: BigInt | null;
  loading: boolean;
  error: string | null;
  gameContrat: any;
  nftContract: any;
  selectedWeapon: number;
  selectedPower: number;
  connectWallet: () => Promise<any>;
  disconnectWallet: () => void;
};

export const useEthersStore = create<EthersStore>()(
  subscribeWithSelector((set, get) => ({
    provider: null,
    currentWallet: null,
    chainId: null,
    loading: false,
    error: null,
    gameContrat: null,
    nftContract: null,
    selectedWeapon: 0,
    selectedPower: 0,
    connectWallet: async () => {
      try {
        const wallet = await AuthServices.connect(get().provider!);
        if (!wallet) return;
        set({ currentWallet: wallet });
      } catch (error) {
        console.log(error);
      }
    },
    disconnectWallet: () => {
      set({ currentWallet: null });
    },
  }))
);
