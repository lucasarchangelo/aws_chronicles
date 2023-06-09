'use client'
import { Button } from "../Button";
import { useEthersStore } from "@/store/ethersStore";

export const Header = () => {
  const currentWallet = useEthersStore((state) => state.currentWallet);
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
          <li>Home</li>
          <li>Disconnect</li>
          <li>0x4323432534</li>
          <li>
            <Button
              onClick={connectWallet}
            >
              {currentWallet ? "Logout" : "Connect Wallet"}
            </Button>
          </li>
          <li>
            {currentWallet && 'Tem wallet aqui'}
          </li>
        </ul>
      </div>
    </header>
  );
};
