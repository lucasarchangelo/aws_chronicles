"use client";
import { Layout } from "../Layout";
import { BoxElements } from "./components/BoxElements";
import { useContract } from "@/contexts/ContractContext";
import ActionButtons from "@/components/ActionButtons";

export const Confirm = () => {
  //importar funcoes do contrato
  const {} = useContract();
  return (
    <Layout
      actions={
        <ActionButtons/>
      }
      leftSlot={<BoxElements />}
    />
  );
};
