import type React from "react";
import { useCounter } from "../provider/Counter";

const MyButton: React.FC = () => {
  const context = useCounter();
  return (
    <>
      <h1 onClick={() => context?.setCount(context?.value + 1)}>
        {context?.value}
      </h1>
    </>
  );
};

export default MyButton;
