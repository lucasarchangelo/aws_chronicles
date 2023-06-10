"use client";

import Image from "next/image";
import Link from "next/link";
import soldierImg from "../../public/image.png";
import rightLp from "../../public/right-lp.png";
import detailsLpLeft from "../../public/details-lp-left.png";
import PlayerLp from "../../public/PlayerLp.png";
import GroupMarket from "../../public/GroupMarket.png";
import GroupPower from "../../public/GroupPower.png";
import GroupVisitors from "../../public/GroupVisitors.png";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <div className="relative z-0 px-16 py-20 bg-[#1E1E1E]">
      <div className="absolute left-0 top-0 h-[526px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-400 blur-full" />
      <div className="absolute right-0 top-1/2 h-[526px] w-[526px] -translate-y-1/2 rounded-full bg-purple-500 blur-full" />
      <div className="absolute right-1/2 bottom-0 h-[526px] w-[526px] translate-x-1/2 rounded-full bg-blue-300 blur-full" />
      <Image
        className="absolute z-20 left-0 top-10 w-96"
        src={soldierImg}
        alt=""
        width={545}
        height={685}
      />

      <main className="relative z-10 bg-black min-h-screen min-w-full flex flex-col">
        <div className="pl-96 pb-20 bg-[#111111]">
          <header className="flex items-start justify-between mb-16">
            <div className="flex items-center justify-center gap-28 mt-16">
              <Link href="/about">About us</Link>
              <Link href="/why-aws">Why AWS?</Link>
              <Link href="contact-us">Contact us</Link>
            </div>
            <div className="flex gap-6 mt-4 mr-4">
              <input
                type="text"
                name="browse"
                id="browse"
                className="z-10 px-3 py-2 text-[#B1B1B1] bg-[#666666]"
                placeholder="Browser Chronicles..."
              />
              <div className="w-10 h-10 bg-[#262626] rounded-full"></div>
              <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
            </div>
          </header>
          <div className="flex gap-20">
            <div className="w-[560px]">
              <h1 className="text-5xl mb-2 w-auto">Arcane Warriors Saga</h1>
              <h2 className="text-4xl mb-6">The AWS Chronicles</h2>
              <h3 className="text-md max-w-xs mb-8">
                A revolutionary gaming experience where your weapon isn&apos;t
                just a tool but a living entity that evolves alongside you.
                Immerse yourself in a dynamic world filled with challenges,
                battles, and untold secrets, as you embark on a quest to forge
                the ultimate armament.
              </h3>
              <div className="-ml-5 w-56">
                <Link href="/dapp">
                  <Button>Go to dapp</Button>
                </Link>
              </div>
            </div>
            <div className="items-end">
              <Image
                src={rightLp}
                alt=""
                width={400}
                height={400}
                className="w-96"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-1/2 bg-[#111111] my-20 mx-10 flex">
            <div className="p-12 w-1/2">
              <h4 className="text-4xl text-blue-300 mb-4">THE FORGE</h4>
              <p className="text-md mb-8">
                Through relentless battles and strategic decision-making, you
                can unlock an unprecedented system of weapon evolution.
              </p>
              <Button>
                <Link href="/explore">Explore</Link>
              </Button>
            </div>
            <div>
              <Image src={detailsLpLeft} alt="" width={300} height={300} />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                src={PlayerLp}
                alt=""
                width={270}
                height={350}
                className="w-60"
              />
            </div>
            <div className="ml-6 pr-6 flex items-center flex-col justify-center gap-8 border-y-2 border-r-2 border-white ">
              <div className="flex items-center gap-4">
                <span>Power</span>
                <Image
                  src={GroupPower}
                  alt=""
                  width={270}
                  height={350}
                  className="w-48"
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Visitors</span>
                <Image
                  src={GroupVisitors}
                  alt=""
                  width={270}
                  height={350}
                  className="w-48"
                />
              </div>
              <div className="flex items-center gap-4">
                <span>Market</span>
                <Image
                  src={GroupMarket}
                  alt=""
                  width={270}
                  height={350}
                  className="w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
