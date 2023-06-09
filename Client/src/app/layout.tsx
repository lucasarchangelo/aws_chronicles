import { Header } from "@/components/Header";
import "./globals.css";
import { Gugi } from "next/font/google";
import ContractProvider from "@/contexts/ContractContext";

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
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
      <ContractProvider>
        <body style={gugi.style}>{children}</body>
      </ContractProvider>
    </html>
  );
}
