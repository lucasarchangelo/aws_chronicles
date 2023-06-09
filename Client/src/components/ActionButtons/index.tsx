import Link from "next/link";
import { Button } from "../Button";

export default function ActionButtons() {
  return (
    <>
    <Button>Forge Weapons</Button>
    <Link href="/dapp/confirm">
      <Button>Upgrade Weapons</Button>
    </Link>
    <Button color="white">Leaderboard</Button>
    <Link href="/dapp/resume">
      <Button color="white">Last Upgrades</Button>
    </Link>
  </>
  )
}