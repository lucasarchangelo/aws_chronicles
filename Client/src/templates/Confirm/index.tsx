"use client";
import { Button } from "@/components/Button";
import { Layout } from "../Layout";
import { BoxElements } from "./components/BoxElements";
import { useContract } from "@/contexts/ContractContext";

export const Confirm = () => {
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
      leftSlot={<BoxElements />}
    />
  );
};
