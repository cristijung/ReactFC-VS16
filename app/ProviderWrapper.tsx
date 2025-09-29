"use client";

import { ReactNode } from "react";
import { CounterProvider } from "./context/CounterContext";

interface ProviderWrapperProps {
  children: ReactNode;
}

export const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <CounterProvider>{children}</CounterProvider>;
};
