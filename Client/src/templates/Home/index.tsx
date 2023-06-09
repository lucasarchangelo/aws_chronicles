"use client";
import Image from "next/image";
import { Layout } from "../Layout";
import { Weapons } from "./components/Weapons";
import { Blur } from "@/components/Blur";
import { useContract } from "@/contexts/ContractContext";
import ActionButtons from "@/components/ActionButtons";

export const Home = () => {
  //importar funcoes do contrato

  return (
    <Layout
      actions={<ActionButtons />}
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
