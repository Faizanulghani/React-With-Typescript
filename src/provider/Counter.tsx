import React, { createContext, useContext, useState } from "react";

interface CounterContextProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

const counterContext = createContext<CounterContextValue | null>(null);

export const useCounter = () => {
  return useContext(counterContext);
};

export const CounterProvider: React.FC<CounterContextProps> = (props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <counterContext.Provider
      value={{
        value: count,
        setCount,
      }}
    >
      {props.children}
    </counterContext.Provider>
  );
};
