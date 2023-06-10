"use client";
import Link from "next/link";
import { useEthersStore } from "@/store/ethersStore";

export const HeaderBlog = () => {

  return (
    <header className="w-full h-[80px] flex bg-gradient-to-b from-black from-90% to-transparent">
      <div className="p-5 w-1/2">
        <Link href="/">
          <h1 className="text-3xl">Arcane Warriors Saga</h1>
          <p className="text-xl">The AWS Chronicles</p>
        </Link>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#99C7F4] text-neutral-800">
        <ul className="flex w-full font-thin items-center justify-evenly">
          <li>
            <Link href="/dapp">Home</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
