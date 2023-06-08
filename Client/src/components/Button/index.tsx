import { ReactNode } from "react";

export const Button = ({
  onClick,
  color = "primary",
  children,
}: {
  onClick?: () => void;
  color?: "primary" | "white";
  children: ReactNode;
}) => (
  <svg
    onClick={onClick}
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
      x={150}
      y={40}
      textAnchor="middle"
      dominantBaseline="middle"
      className={`fill-current text-xl text-black font-semibold`}
    >
      {children}
    </text>
  </svg>
);
