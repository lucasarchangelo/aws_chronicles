"use client";

import { useEthersStore } from "@/store/ethersStore";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";
import { useEthers } from "@/hooks/useEthers";
import Game from "../../contracts/Game.json";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const ContractContext = createContext({} as any);

export const useContract = () => useContext(ContractContext);

const ContractProvider = ({ children }: { children: any }) => {
  const chainId = useEthersStore((state) => state.chainId);
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const { provider, signer } = useEthers();
  const gameContractAddress = useEthersStore((state) => state.gameContrat);
  const [gameContractInstance, setGameContractInstance] = useState<any>();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!provider || !currentWallet || !signer) return;
    const Contract = new ethers.Contract(gameContractAddress, Game.abi, signer);
    setGameContractInstance(Contract);
  }, [chainId, provider, signer]);

  const buyWeapon = async () => {
    if (!gameContractInstance || !signer || !provider) return;
    try {
      const price = await gameContractInstance.getNftPrice();
      const tx = await gameContractInstance.buyWeapon({
        value: price,
      });
      toast.info("Transaction sent");
      const receipt = await tx.wait();
      toast.success("Transaction confirmed");
      return receipt;
    } catch (error) {
      toast.error("Transaction failed");
      console.log(error);
    } finally {
      setTimeout(() => {
        queryClient.invalidateQueries(["nftCollection", currentWallet]);
      }, 2000);
    }
  };

  const upgradeWeapon = async (tokenId: number, luckValue: number) => {
    if (!gameContractInstance || !signer || !provider) return;
    try {
      const upgradePrice = await gameContractInstance.getUpgradePrice();
      console.log({ upgradePrice });
      const tx = await gameContractInstance.forgeUpgradeWeapon(
        tokenId,
        luckValue,
        {
          value: upgradePrice,
        }
      );
      console.log({ tx });
      toast.info("Transaction sent");
      const receipt = await tx.wait();
      toast.success("Transaction confirmed");
      console.log({ receipt });
      return receipt;
    } catch (error) {
      toast.error("Transaction failed");
      console.log(error);
    } finally {
      setTimeout(() => {
        queryClient.invalidateQueries(["nftCollection", currentWallet]);
      }, 4000);
    }
  };

  return (
    <ContractContext.Provider
      value={{
        gameContractInstance,
        buyWeapon,
        upgradeWeapon,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
