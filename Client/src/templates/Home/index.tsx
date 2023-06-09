import Image from "next/image";
import { Layout } from "../Layout";
import { Button } from "@/components/Button";
import { Weapons } from "./components/Weapons";
import { Blur } from "@/components/Blur";
import { useContract } from "@/contexts/ContractContext";

export const Home = () => {
  //importar funcoes do contrato
  const {} = useContract();

  return (
    <Layout
      actions={
        <>
          <Button>Forge Weapons</Button>
          <Button>Upgrade Weapons</Button>
          <Button color="white">Leaderboard</Button>
          <Button color="white">Last Upgrades</Button>
        </>
      }
      footer={<Weapons></Weapons>}
      leftSlot={
        <div className="flex w-full justify-center items-center relative">
          <Blur />
          <Image
            alt="element"
            className="z-10"
            src="/static-element.png"
            width={340}
            height={340}
          />
        </div>
      }
    />
  );
};
