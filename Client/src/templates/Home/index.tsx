"use client";
import Image from "next/image";
import { Layout } from "../Layout";
import { Weapons, weapons } from "./components/Weapons";
import { Blur } from "@/components/Blur";
import { useContract } from "@/contexts/ContractContext";
import ActionButtons from "@/components/ActionButtons";
import { useEthersStore } from "@/store/ethersStore";
import { motion } from "framer-motion";

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
        <>
          <Blur />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 1,
            }}
            className="flex w-full justify-center items-center relative"
            key={selectedWeaponObj.id}
          >
            <Image
              alt="element"
              className="z-10"
              src={selectedWeaponObj.image}
              width={340}
              height={340}
            />
          </motion.div>
        </>
      }
    />
  );
};
