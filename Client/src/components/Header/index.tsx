"use client";
import Link from "next/link";
import { Button } from "../Button";
import { useEthersStore } from "@/store/ethersStore";

export const Header = () => {
  const currentWallet = useEthersStore(
    (state) => state.currentWallet
  ) as string;
  const connectWallet = useEthersStore((state) => state.connectWallet);
  const disconnectWallet = useEthersStore((state) => state.disconnectWallet);

  return (
    <header className="w-full h-[80px] flex bg-gradient-to-b from-black from-90% to-transparent">
      <div className="p-5 w-1/2">
        <h1 className="font-medium text-3xl">Arcane Warriors Saga</h1>
        <p className="font-thin text-xl">The AWS Chronicles</p>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#99C7F4] text-neutral-800">
        <ul className="flex w-full font-thin items-center justify-evenly">
          <li>
            <Link href="/">Home</Link>
          </li>
          {currentWallet && (
            <>
              <li className="font-bold">
                {`0x${currentWallet[2]}${currentWallet[3]}${currentWallet[4]}...${currentWallet.slice(-4)}`}
              </li>
            </>
          )}
          <li
            className="cursor-pointer"
            onClick={!currentWallet ? connectWallet : disconnectWallet}
          >
            {currentWallet ? "Logout" : "Connect Wallet"}
          </li>
        </ul>
      </div>
    </header>
  );
};
