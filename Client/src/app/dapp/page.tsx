"use client"
import { useEthersStore } from "@/store/ethersStore";
import { Home } from "@/templates/Home";

export default function HomePage() {
  const currentWallet = useEthersStore(
    (state) => state.currentWallet
  ) as string;
  return (
    <>
      {currentWallet && <Home />}
    </>
  );
}
