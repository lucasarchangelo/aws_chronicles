import { useEthersStore } from "@/store/ethersStore";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

import Game from "../../contracts/Game.json";
import NFTWeapon from "../../contracts/NFTWeapon.json";

type useEthersReturn = {
  provider?: ethers.BrowserProvider;
  signer?: ethers.JsonRpcSigner;
};

export const useEthers = (): useEthersReturn => {
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const [provider, setProvider] = useState<ethers.BrowserProvider>();
  const [signer, setSigner] = useState<ethers.JsonRpcSigner>();

  useEffect(() => {
    if (!window.ethereum) return;
    try {
      const providerInstance = new ethers.BrowserProvider(
        window.ethereum,
        "any"
      );
      const idChain = providerInstance?.getNetwork().then((network: any) => {
        useEthersStore.setState({ chainId: network.chainId });
      });
      setProvider(providerInstance);
      useEthersStore.setState({ provider: providerInstance });
      
      const gameAddress = Game.networks["80001"].address;
      const nftWeapon = NFTWeapon.networks["80001"].address;

      useEthersStore.setState({nftContract: nftWeapon});
      useEthersStore.setState({gameContrat: gameAddress});
      
    } catch (error) {
      console.log(error);
    }
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      useEthersStore.setState({ currentWallet: accounts[0] });
    });

    window.ethereum.on("chainChanged", (idChain: string) => {
      useEthersStore.setState({ chainId: BigInt(idChain) });
    });
  }, []);

  useEffect(() => {
    if (!provider || !currentWallet) return;
    const fetchData = async () => {
      const signer = await provider?.getSigner();
      setSigner(signer);
    }
    const result = fetchData()
  }, [provider, currentWallet]);

  return {
    provider,
    signer,
  };
};