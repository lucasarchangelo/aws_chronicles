import { ReactNode } from "react";

const Button = ({
  color = "primary",
  children,
}: {
  color?: "primary" | "white";
  children: ReactNode;
}) => (
  <svg
    width={270}
    height={60}
    viewBox="0 0 303 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex relative items-center justify-center"
  >
    <path
      d="M269.544 0H0V53.6709L38.5063 80H170.753H303V28.3544L269.544 0Z"
      className={`fill-current ${
        color === "primary" ? "text-[#99C7F4]" : "text-white"
      }
        hover:opacity-95 transition-all duration-300 ease-in-out
        cursor-pointer
        `}
    />
    <text
      x={30}
      y={40}
      className={`fill-current ${
        color === "primary" ? "text-white" : "text-[#99C7F4]"
      } 
        `}
    >
      {children}
    </text>
  </svg>
);
