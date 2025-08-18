import type React from "react";
import { useState } from "react";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}

interface Book {
  name: string;
  price: number;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const [value, setValue] = useState<Book>({
    name: "One",
    price: 10,
  });
  return (
    <>
      <h3>
        Name: {value.name} (Rs. {value.price})
      </h3>
      <button onClick={() => setValue({ name: "Two", price: 20 })}>
        {props.text}
      </button>
    </>
  );
};

export default MyButton;
