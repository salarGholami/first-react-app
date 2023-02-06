import React from "react";
import { useContext } from "react";
import { useReducer } from "react";

const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState
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

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={dispatch}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => useContext(CounterContextDispatcher);
 