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
      const id = toast.loading("Transaction sent");
      const receipt = await tx.wait();
      toast.update(id, {
        render: "Transaction confirmed",
        type: "success",
        isLoading: false,
        autoClose: 2500,
      });

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
      const tx = await gameContractInstance.forgeUpgradeWeapon(
        tokenId,
        luckValue,
        {
          value: upgradePrice,
        }
      );

      const id = toast.loading("Transaction sent");
      const receipt = await tx.wait();
      toast.update(id, {
        render: "Transaction confirmed",
        type: "success",
        isLoading: false,
        autoClose: 3500,
      });

      return receipt;
    } catch (error) {
      toast.error("Transaction failed");
      console.log(error);
    } finally {
      setTimeout(() => {
        queryClient.invalidateQueries(["nftCollection", currentWallet]);
      }, 3500);
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
