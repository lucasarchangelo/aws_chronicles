"use client";

import ContractProvider from "@/contexts/ContractContext";
import { ToastContainer } from "react-toastify";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContractProvider>
      <ToastContainer theme="dark" />
      {children}
    </ContractProvider>
  );
};
