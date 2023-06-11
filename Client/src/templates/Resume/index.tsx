import { Layout } from "@/templates/Layout";
import { LastUpgrades } from "./components/LastUpgrades";

export const Resume = () => {
  return <Layout leftSlot={<LastUpgrades />} />;
};
