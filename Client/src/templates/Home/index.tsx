"use client";
import Image from "next/image";
import { Layout } from "../Layout";
import { Weapons, weapons } from "./components/Weapons";
import { Blur } from "@/components/Blur";
import { useContract } from "@/contexts/ContractContext";
import ActionButtons from "@/components/ActionButtons";
import { useEthersStore } from "@/store/ethersStore";

export const Home = () => {
  const selectedWeapon = useEthersStore((state) => state.selectedWeapon);
  const selectedWeaponObj = weapons.filter(
    (item) => item.id === selectedWeapon
  )[0];

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
            src={selectedWeaponObj.image}
            width={340}
            height={340}
          />
        </div>
      }
    />
  );
};
