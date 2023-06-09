"use client";

import { Layout } from "@/templates/Layout";
import { LastUpgrades } from "./components/LastUpgrades";
import { useContract } from "@/contexts/ContractContext";
import ActionButtons from "@/components/ActionButtons";

export const Resume = () => {
  //importar funcoes do contrato
  const {} = useContract();
  return (
    <Layout
      actions={
        <ActionButtons />
      }
      leftSlot={<LastUpgrades />}
    />
  );
};
