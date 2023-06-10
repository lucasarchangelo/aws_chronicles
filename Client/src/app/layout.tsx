"use client";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Gugi } from "next/font/google";
import ContractProvider from "@/contexts/ContractContext";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer theme="dark" />
        <body style={gugi.style}>{children}</body>
      </ContractProvider>
    </html>
  );
}
