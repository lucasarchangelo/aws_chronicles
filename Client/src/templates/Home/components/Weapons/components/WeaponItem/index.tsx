import { useAwsStore } from "@/store/awsStore";

export const WeaponItem = ({ item }: { item: any }) => (
  <div
    onClick={() => useAwsStore.setState({ selectedWeapon: item?.tokenId })}
    className="mb-8 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <img
      alt="element"
      className="z-10 h-[100px]"
      src={item?.metadata?.image}
      width={100}
      height={100}
    />
    <span className="text-black mt-4 text-sm">TokenID: {item.tokenId}</span>
  </div>
);
