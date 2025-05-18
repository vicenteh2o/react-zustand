import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={decrement}>Decrement</button>
      {count}
    </>
  );
};

export default App;
