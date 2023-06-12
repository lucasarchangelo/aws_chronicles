import Image from "next/image";
import soldierImg from "../../../../public/blog-img.png";

export default function AboutUs() {
  return (
    <div className="relative z-0">
      <Image
        className="absolute z-20 left-0 bottom-0 w-[400px]"
        src={soldierImg}
        alt=""
        width={450}
        height={450}
      />

      <main className="relative z-10 h-[733px] flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl">About us</h2>
        <p className="max-w-lg text-center text-lg">AWS Chronicles combines the addictive features of upgrading weapons, taking calculated risks, and participating in a season-based competition for the chance to win the jackpot. The integration of Chainlink VRF technology guarantees transparency and fairness, while Chainlink Automation enables the seamless progression from one season to another. With a portion of the fees supporting the grand prize and the team&apos;s efforts, AWS Chronicles creates an engaging and rewarding experience for players while fostering the growth of new startups.</p>
      </main>
  </div>
  );
}
