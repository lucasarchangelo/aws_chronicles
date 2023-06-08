import { Button } from "@/components/Button";
import { Layout } from "@/templates/Layout";
import Image from "next/image";

const Weapons = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative">
    <svg
      width={542}
      height={110}
      viewBox="0 0 542 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 -right-9"
    >
      <path
        d="M491.05 0H0V97.9494L70.15 146H311.075H552V51.7468L491.05 0Z"
        fill="#95C5F4"
      />
    </svg>
    <div className="absolute z-2">{children}</div>
  </div>
);

const Actions = () => (
  <>
    <Button>Forge Weapons</Button>
    <Button>Upgrade Weapons</Button>
    <Button color="white">Leaderboard</Button>
    <Button color="white">Last Upgrades</Button>
  </>
);

export default function Home() {
  return (
    <Layout
      actions={<Actions />}
      footer={<Weapons></Weapons>}
      leftSlot={
        <div className="flex w-full justify-center items-center ">
          <Image
            alt="element"
            src="/static-element.png"
            width={340}
            height={340}
          />
        </div>
      }
    />
  );
}
