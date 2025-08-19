import MyButton from "./components/MyButton";
import { CounterProvider } from "./provider/Counter";
function App() {
  return (
    <>
      <CounterProvider>
        <MyButton />
      </CounterProvider>
    </>
  );
}

export default App;
