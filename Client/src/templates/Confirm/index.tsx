import { Button } from "@/components/Button";
import { Layout } from "../Layout";
import { BoxElements } from "./components/BoxElements";

export const Confirm = () => {
  return (
    <Layout
      actions={
        <>
          <Button>Forge Weapons</Button>
          <Button>Upgrade Weapons</Button>
          <Button color="white">Leaderboard</Button>
          <Button color="white">Last Upgrades</Button>
        </>
      }
      leftSlot={<BoxElements />}
    />
  );
};
