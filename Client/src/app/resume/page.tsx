import { Button } from "@/components/Button";
import { Layout } from "@/templates/Layout";
import Image from "next/image";

const Actions = () => (
  <>
    <Button>Forge Weapons</Button>
    <Button>Upgrade Weapons</Button>
    <Button color="white">Leaderboard</Button>
    <Button color="white">Last Upgrades</Button>
  </>
);

const LastUpgrades = () => (
  <div className="w-full h-full bg-neutral-950 p-8">
    <div>
      <div className="py-4">
        <h1 className="font-bold text-2xl">Last Updgrades</h1>
      </div>
      <div className="text-neutral-600">
        <p>#1 Awaiting</p>
        <p>#2 Awaiting</p>
        <p>#3 Awaiting</p>
        <p>#4 Awaiting</p>
      </div>
    </div>
  </div>
);

export default function Resume() {
  return <Layout actions={<Actions />} leftSlot={<LastUpgrades />} />;
}
