import type React from "react";
import { useState } from "react";

const MyButton: React.FC = () => {
  const [value, setValue] = useState<string | undefined>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <h1>{value}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Enter Your Name"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyButton;
