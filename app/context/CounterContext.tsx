"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CounterState {
  count: number;
}

interface CounterContextType {
  state: CounterState;
  increment: () => void;
  decrement: () => void;
}

// criando o context
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// criando o provider
// responsável pelo armazenamento e fornecimento do estado para todos os seus filhos
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const state = { count };
  const value = { state, increment, decrement };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter deve ser usado dentro de um CounterProvider");
  }
  return context;
};
