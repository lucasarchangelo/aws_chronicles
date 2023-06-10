import { useContract } from "@/contexts/ContractContext";
import { useEthersStore } from "@/store/ethersStore";
import Image from "next/image";

export const weapons = [
  {
    id: 0,
    image: "/static-element.png",
  },
  {
    id: 16,
    image: "/static-element-2.png",
  },
  {
    id: 17,
    image: "/static-element-3.png",
  },
  {
    id: 18,
    image: "/static-element-4.png",
  },
];

export const Weapons = () => {
  const selectedWeapon = useEthersStore((state) => state.selectedWeapon);
  const notSelectedWeapon = weapons.filter(
    (item) => item.id !== selectedWeapon
  );

  return (
    <div className="relative flex items-center justify-evenly bg-[#99C7F4] h-full w-2/5">
      {notSelectedWeapon?.map((item) => (
        <div
          onClick={() => useEthersStore.setState({ selectedWeapon: item.id })}
          key={item.id}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img
            alt="element"
            className="z-10"
            src={item.image}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};
