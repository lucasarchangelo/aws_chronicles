import { Header } from "@/components/Header";
import "./globals.css";
import { Gugi } from "next/font/google";

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-gugi'
});

export const metadata = {
  title: "Arcane Warriors Saga | The AWS Chronicles",
  description: "Arcane Warriors Saga, The AWS Chronicles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gugi.variable} font-sans`}>{children}</body>
    </html>
  );
}
