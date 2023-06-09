"use client"
import { useEthersStore } from "@/store/ethersStore";
import { Resume } from "@/templates/Resume";

export default function ResumePage() {
  const currentWallet = useEthersStore(
    (state) => state.currentWallet
  ) as string;
  return (
    <>
      {currentWallet && <Resume />}
    </>
  );
}
