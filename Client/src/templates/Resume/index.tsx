import { Layout } from "@/templates/Layout";
import { Button } from "@/components/Button";
import { LastUpgrades } from "./components/LastUpgrades";
import { useContract } from "@/contexts/ContractContext";

export const Resume = () => {
  //importar funcoes do contrato
  const {} = useContract();
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
      leftSlot={<LastUpgrades />}
    />
  );
};
