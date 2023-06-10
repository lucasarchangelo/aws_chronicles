"use client";

import ContractProvider from "@/contexts/ContractContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContractProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer theme="dark" />
        {children}
      </QueryClientProvider>
    </ContractProvider>
  );
};
