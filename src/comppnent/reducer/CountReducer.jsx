import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "addFive":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dipatch] = useReducer(reducer, initialState);
  const [countTwo, twodipatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count is one : {count}</h2>
      <div>
        <button onClick={() => dipatch({ type: "addOne", value: 1 })}>
          add one
        </button>
        <button onClick={() => dipatch({ type: "addFive", value: 5 })}>
          add five
        </button>
        <button onClick={() => dipatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <h2>count is two : {countTwo}</h2>
      <div>
        <button onClick={() => twodipatch({ type: "addOne", value: 1 })}>
          add one
        </button>
        <button onClick={() => twodipatch({ type: "addFive", value: 5 })}>
          add five
        </button>
        <button onClick={() => twodipatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
      </div>
      <button onClick={() => dipatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterReducer;
