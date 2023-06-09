import { Blur } from "@/components/Blur";
import { Button } from "@/components/Button";
import Image from "next/image";

const fakeData = [
  {
    id: 0,
    image: "/static-power.png",
  },
  {
    id: 1,
    image: "/static-power.png",
  },
  {
    id: 2,
    image: "/static-power.png",
  },
  {
    id: 3,
    image: "/static-power.png",
  },
];

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
          {fakeData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              <Image
                alt="element"
                className="z-10"
                src={item.image}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
        <Button>Confirm Transition</Button>
      </div>
    </div>
  );
};
