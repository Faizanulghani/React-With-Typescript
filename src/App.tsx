import { useState } from "react";
import MyButton from "./components/MyButton";

interface Book {
  name: string;
  price: number;
}

function App() {
  const [value, setValue] = useState<Book>({
    name: "One",
    price: 10,
  });
  return (
    <>
      <h3>
        Name: {value.name} (Rs. {value.price}){" "}
      </h3>
      <MyButton
        onClick={() => setValue({ name: "Two", price: 20 })}
        text="MyButton"
      />
    </>
  );
}

export default App;
