import { useContract } from "@/contexts/ContractContext";
import { useEthersStore } from "@/store/ethersStore";

export const Weapons = ({ weapons }: any) => {
  const selectedWeapon =
    useEthersStore((state) => state.selectedWeapon) || weapons[0]?.tokenId;
  const notSelectedWeapon = weapons.filter(
    (item: any) => item?.tokenId !== selectedWeapon
  );

  return (
    <div className="relative flex items-center justify-evenly bg-[#99C7F4] h-full w-2/5">
      {notSelectedWeapon?.map((item: any) => (
        <div
          onClick={() =>
            useEthersStore.setState({ selectedWeapon: item?.tokenId })
          }
          key={item.id}
          className="flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <img
            alt="element"
            className="z-10"
            src={item?.metadata?.image}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};
