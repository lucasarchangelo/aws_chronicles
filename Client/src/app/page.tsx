"use client";
import { useEthers } from "@/hooks/useEthers";
import { useEthersStore } from "@/store/ethersStore";
import { LandingPage } from "@/templates/LandingPage";
import Image from "next/image";

export default function Home() {
  const { provider, signer } = useEthers();
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const connectWallet = useEthersStore((state) => state.connectWallet);
  const disconnectWallet = useEthersStore((state) => state.disconnectWallet);

  return <LandingPage />;
}
