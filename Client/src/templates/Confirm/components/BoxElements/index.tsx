"use client";

import { Blur } from "@/components/Blur";
import { Button } from "@/components/Button";
import { useContract } from "@/contexts/ContractContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAwsStore } from "@/store/awsStore";

const fakeData = [
  {
    id: 0,
    image: "/static-power-1.png",
  },
  {
    id: 1,
    image: "/static-power-2.png",
  },
  {
    id: 2,
    image: "/static-power-3.png",
  },
  {
    id: 3,
    image: "/static-power-4.png",
  },
];

export const BoxElements = () => {
  const { selectedWeapon, selectedPower } = useAwsStore((state) => state);
  const { upgradeWeapon } = useContract();

  const handleUpgrade = async () => {
    await upgradeWeapon(selectedWeapon, selectedPower);
  };

  return (
    <motion.div
      initial={{ opacity: 0, right: "-30%" }}
      animate={{ opacity: 1, right: "0%" }}
      exit={{ opacity: 0, scale: 0.1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1,
      }}
      className="flex w-full justify-center items-center relative"
    >
      <Blur />
      <div className="flex rounded-2xl gap-4 bg-neutral-950 p-10 items-center w-2/4 justify-center flex-col">
        <div
          className="grid
                  grid-cols-2
                  w-4/5
                  gap-4
                  z-2
              "
        >
          {fakeData?.map((item) => (
            <div
              key={item.id}
              onClick={() => useAwsStore.setState({ selectedPower: item.id })}
              className={`${
                selectedPower == item.id && "scale-110"
              } flex flex-col cursor-pointer items-center justify-center hover:scale-105 transition-all ease-in-out`}
            >
              <Image
                alt="element"
                className="z-10"
                src={item.image}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <Button onClick={handleUpgrade}>Confirm Upgrade</Button>
      </div>
    </motion.div>
  );
};
