import { motion } from "framer-motion";
import { Blur } from "@/components/Blur";
import Image from "next/image";

export const CurrentNFT = ({
  selectedWeaponObj,
}: {
  selectedWeaponObj: any;
}) => (
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
      {selectedWeaponObj?.metadata ? (
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
);
