"use client"
import { useEthers } from '@/hooks/useEthers';
import { useEthersStore } from '@/store/ethersStore';
import Image from 'next/image'

export default function Home() {
  const { provider, signer } = useEthers();
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const connectWallet = useEthersStore((state) => state.connectWallet);
  const disconnectWallet = useEthersStore((state) => state.disconnectWallet);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Teste
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <label>{currentWallet ? currentWallet.substring(0,4) + "..." + currentWallet.substring(currentWallet.length-4,currentWallet.length) : ""}</label>
          &nbsp;<button onClick={currentWallet ? disconnectWallet : connectWallet}>{currentWallet ? "Disconnect" : "Connect"}</button>
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        Teste
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  )
}
