import { useAwsStore } from "@/store/awsStore";

export const WeaponItem = ({ item }: { item: any }) => (
  <div
    onClick={() => useAwsStore.setState({ selectedWeapon: item?.tokenId })}
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
);
