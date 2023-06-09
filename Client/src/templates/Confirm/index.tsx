"use client";
import { Layout } from "../Layout";
import { BoxElements } from "./components/BoxElements";
import ActionButtons from "@/components/ActionButtons";

export const Confirm = () => {
  return <Layout actions={<ActionButtons />} leftSlot={<BoxElements />} />;
};
