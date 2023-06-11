import { motion } from "framer-motion";
import { WeaponItem } from "./components/WeaponItem";

export const Weapons = ({ weapons, selectedWeapon }: any) => {
  const notSelectedWeapon = weapons.filter(
    (item: any) => item?.tokenId !== (selectedWeapon ?? weapons[0]?.tokenId)
  );

  return (
    <motion.div
      initial={{ y: "50%" }}
      animate={{ y: "0%" }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
      }}
      className="relative rounded-tl-3xl flex items-center justify-evenly bg-[#99C7F4] h-full w-2/5"
    >
      {notSelectedWeapon?.map((item: any) => (
        <WeaponItem key={item.tokenId} item={item} />
      ))}
    </motion.div>
  );
};
