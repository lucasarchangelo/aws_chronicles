"use client";
import Image from "next/image";
import { Layout } from "../Layout";
import { Weapons } from "./components/Weapons";
import { Blur } from "@/components/Blur";
import ActionButtons from "@/components/ActionButtons";
import { useEthersStore } from "@/store/ethersStore";
import { motion } from "framer-motion";
import { useNftCollection } from "@/hooks/useNftCollection";
import { HashLoader } from "react-spinners";

export const Home = () => {
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const { data, isLoading } = useNftCollection(currentWallet);
  const selectedWeapon =
    useEthersStore((state) => state.selectedWeapon) || data?.NFTS[0].tokenId;
  const selectedWeaponObj = data?.NFTS.filter(
    (item: any) => item.tokenId === selectedWeapon
  )[0];

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <HashLoader color={"#ffffff"} size={70} />
      </div>
    );

  return (
    <Layout
      actions={<ActionButtons />}
      footer={<Weapons weapons={data.NFTS} />}
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
              src={selectedWeaponObj.metadata.image}
              width={340}
              height={340}
            />
          </motion.div>
        </>
      }
    />
  );
};
