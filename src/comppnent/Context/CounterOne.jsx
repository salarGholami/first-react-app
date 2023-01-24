import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const setCount = useCountActions();
  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={() => setCount(count + 1)}>add one by one </button>
    </div>
  );
};

export default CounterOne;
