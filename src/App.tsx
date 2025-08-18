import MyButton from "./components/MyButton";

function App() {
  return (
    <>
      <MyButton onClick={() => alert("clicked")} text="MyButton" />
    </>
  );
}

export default App;
