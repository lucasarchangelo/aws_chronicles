import { Blur } from "@/components/Blur";
import { Button } from "@/components/Button";
import Image from "next/image";

export const BoxElements = () => {
  return (
    <div className="flex w-full justify-center items-center relative">
      <Blur />
      <div className="flex rounded-2xl gap-4 bg-neutral-950 p-10 items-center w-2/4 justify-center flex-col">
        <div
          className="grid
                  grid-cols-2
                  w-4/5
                  gap-4
                  z-2
              "
        >
          <div className="flex items-center justify-center">
            <Image
              className="w-4/5"
              alt="power"
              src="/static-power.png"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="w-4/5"
              alt="power"
              src="/static-power.png"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="w-4/5"
              alt="power"
              src="/static-power.png"
              width={80}
              height={80}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="w-4/5"
              alt="power"
              src="/static-power.png"
              width={80}
              height={80}
            />
          </div>
        </div>
        <Button>Confirm Transition</Button>
      </div>
    </div>
  );
};
