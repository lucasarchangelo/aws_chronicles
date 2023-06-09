"use client"
import { useEthersStore } from "@/store/ethersStore";
import { Confirm } from "@/templates/Confirm";

export default function ConfirmPage() {
  const currentWallet = useEthersStore(
    (state) => state.currentWallet
  ) as string;
  return (
    <>
      {currentWallet && <Confirm />}
    </>
  );
}
