import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dipatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count is :{count}</h2>
      <button onClick={() => dipatch("addOne")}>add one by one </button>
      <button onClick={() => dipatch("addFive")}>add 5 by 5 </button>
      <button onClick={() => dipatch("decrement")}>decrement </button>
      <button onClick={() => dipatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
