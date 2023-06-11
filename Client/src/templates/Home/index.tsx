"use client";
import { Layout } from "../Layout";
import { Weapons } from "./components/Weapons";
import { HashLoader } from "react-spinners";
import { useHome } from "./hooks/useHome";
import { CurrentNFT } from "./components/CurrentNFT";

export const Home = () => {
  const { data, isLoading, isError, selectedWeaponObj, selectedWeapon } =
    useHome();

  if (isLoading || !data)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <HashLoader color={"#ffffff"} size={70} />
      </div>
    );

  if (isError || !data?.NFTS) return <div>failed to load</div>;

  return (
    <Layout
      footer={<Weapons selectedWeapon={selectedWeapon} weapons={data?.NFTS} />}
      leftSlot={<CurrentNFT selectedWeaponObj={selectedWeaponObj} />}
    />
  );
};
