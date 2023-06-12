'use client'
import Image from "next/image";
import soldierImg from "../../../../public/blog-img.png";
import { Button } from "@/components/Button";

export default function ContactUs() {
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
        <h2 className="text-5xl">Contact us</h2>
        <form className="flex flex-col items-center gap-6 w-96">
          <input
            type="text"
            name="contactName"
            id="contactName"
            className="w-full px-4 py-3 text-[#666666] bg-[#D1E8FF]"
            placeholder="Your name"
          />
          <input
            type="email"
            name="contactEmail"
            id="contactEmail"
            className="w-full px-4 py-3 text-[#666666] bg-[#D1E8FF]"
            placeholder="Email"
          />
          <textarea
            name="contactMessage"
            id="contactMessage"
            className="w-full px-4 py-3 text-[#666666] bg-[#D1E8FF]"
            placeholder="Message"
          />
          <Button>
            Send
          </Button>
        </form>
      </main>
  </div>
  );
}
