import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive } = useCountActions();
  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={addOne}>add one by one </button>
      <button onClick={addFive}>add 5 by 5 </button>
    </div>
  );
};
 
export default CounterOne;
