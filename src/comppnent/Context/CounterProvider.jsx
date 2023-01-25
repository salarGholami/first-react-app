import React from "react";
import { useContext, useState } from "react";

const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={setCount}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addFive = () => {
    setCount((prevCount) => prevCount + 5); 
  };

  return { addOne, addFive };
};
