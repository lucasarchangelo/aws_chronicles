import { Blur } from "@/components/Blur";
import { Button } from "@/components/Button";
import { useContract } from "@/contexts/ContractContext";
import { useEthersStore } from "@/store/ethersStore";
import Image from "next/image";

const fakeData = [
  {
    id: 16,
    image: "/static-power-1.png",
  },
  {
    id: 17,
    image: "/static-power-2.png",
  },
  {
    id: 18,
    image: "/static-power-3.png",
  },
  {
    id: 19,
    image: "/static-power-4.png",
  },
];

export const BoxElements = () => {
  const selectedWeapon = useEthersStore((state) => state.selectedWeapon);
  const selectedPower = useEthersStore((state) => state.selectedPower);
  const { upgradeWeapon } = useContract();

  const handleUpgrade = async () => {
    console.log({ selectedWeapon, selectedPower });
    await upgradeWeapon(selectedWeapon, selectedPower);
  };

  return (
    <div className="flex w-full justify-center items-center relative">
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
              onClick={() =>
                useEthersStore.setState({ selectedPower: item.id })
              }
              className={`${
                selectedPower == item.id && "scale-110"
              } flex flex-col cursor-pointer items-center justify-center hover:scale-105 transition-all duration-300 ease-in-out`}
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
        <Button onClick={handleUpgrade}>Confirm Transition</Button>
      </div>
    </div>
  );
};
