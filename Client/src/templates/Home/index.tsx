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
import { useEffect } from "react";

export const Home = () => {
  const currentWallet = useEthersStore((state) => state.currentWallet);
  const { data, isLoading, isError } = useNftCollection(currentWallet);
  const selectedWeapon = useEthersStore((state) => state.selectedWeapon);

  useEffect(() => {
    if (!data && !useEthersStore.getState().selectedWeapon) return;
    if (!data?.NFTS[0]?.tokenId) return;
    console.log(data.NFTS[0]?.tokenId, "useEffect");
    useEthersStore.setState({ selectedWeapon: data?.NFTS[0]?.tokenId });
  }, [data]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <HashLoader color={"#ffffff"} size={70} />
      </div>
    );

  if (isError) return <div>failed to load</div>;

  const selectedWeaponObj = data?.NFTS.find(
    (item: any) => item?.tokenId === (selectedWeapon ?? data?.NFTS[0]?.tokenId)
  );

  return (
    <Layout
      actions={<ActionButtons />}
      footer={<Weapons weapons={data?.NFTS} />}
      leftSlot={
        <div className="flex w-full justify-center items-center">
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
            key={selectedWeaponObj?.tokenId}
          >
            {data && selectedWeaponObj?.metadata ? (
              <Image
                alt="element"
                className="z-10"
                src={selectedWeaponObj?.metadata?.image}
                width={340}
                height={340}
              />
            ) : (
              <h1>mint your nft to start your way to success</h1>
            )}
          </motion.div>
        </div>
      }
    />
  );
};
