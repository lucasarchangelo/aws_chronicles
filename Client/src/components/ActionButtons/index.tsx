import Link from "next/link";
import { Button } from "../Button";
import { useContract } from "@/contexts/ContractContext";

export default function ActionButtons() {
  const { buyWeapon } = useContract();

  return (
    <>
      <Button onClick={buyWeapon}>Forge Weapons</Button>
      <Link href="/dapp/confirm">
        <Button>Upgrade Weapons</Button>
      </Link>
      <Button color="white">Leaderboard</Button>
      <Link href="/dapp/resume">
        <Button color="white">Last Upgrades</Button>
      </Link>
    </>
  );
}
