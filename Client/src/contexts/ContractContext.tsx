"use client";

import { useEthersStore } from "@/store/ethersStore";
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useEthers } from "@/hooks/useEthers";

const ContractContext = createContext({} as any);

export const useContract = () => useContext(ContractContext);

const ContractProvider = ({ children }: { children: any }) => {
  const chainId = useEthersStore((state) => state.chainId);
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const { provider, signer } = useEthers();
  const gameContractAdress = useEthersStore((state) => state.gameContrat);
  const [gameContractInstance, setGameContractInstance] = useState<any>();

  useEffect(() => {
    if (!provider || !currentWallet || !signer) return;
    //todo: create contract instance
    // const Contract = new ethers.Contract(

    // );
    // setContractInstance(Contract);
  }, [chainId, provider, signer]);

  // criar funcoes para interagir com o contrato

  return (
    <ContractContext.Provider
      value={{
        gameContractInstance,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
