import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "addOne":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "addFive":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "addOne2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "addFive2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <h2>count is one : {count.firstCounter}</h2>
      <h2>count is two : {count.secondCounter}</h2>
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
      <div>
        <button onClick={() => dipatch({ type: "addOne2", value: 1 })}>
          add one2
        </button>
        <button onClick={() => dipatch({ type: "addFive2", value: 5 })}>
          add five2
        </button>
        <button onClick={() => dipatch({ type: "decrement2", value: 1 })}>
          decrement2
        </button>
      </div>
      <button onClick={() => dipatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default CounterReducer;
