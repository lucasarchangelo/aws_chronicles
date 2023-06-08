import Link from "next/link";
import { ReactNode } from "react";

export const ButtonLP = ({
  onClick,
  color = "primary",
  children,
}: {
  onClick?: string;
  color?: "primary" | "white";
  children: ReactNode;
}) => (
  <Link href={onClick!}>
  <svg
    width={220}
    height={60}
    viewBox="0 0 303 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex relative items-center justify-center"
  >
    <path
      d="M269.544 0H0V53.6709L38.5063 80H170.753H303V28.3544L269.544 0Z"
      className={`fill-current ${
        color === "primary" ? "text-blue-300" : "text-white"
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
      className={`fill-current text-3xl text-black`}
    >
      {children}
    </text>
  </svg>
  </Link>
);
