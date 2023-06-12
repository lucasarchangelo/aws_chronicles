import Image from "next/image";
import soldierImg from "../../../../public/blog-img.png";

export default function WhyAWS() {
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
        <h2 className="text-5xl">Why AWS?</h2>
        <p className="max-w-lg text-center text-lg">
          AWS offers unmatched scalability, an extensive service portfolio, global infrastructure, cost optimization features, robust security and compliance, a developer-friendly environment, and a vast community and support system. By integrating AWS into our game, we provide startups the opportunity to earn credits or rewards that can be used to cover their AWS expenses, enabling them to focus on building and growing their business without the financial burden of infrastructure costs.
        </p>
      </main>
  </div>
  );
}
