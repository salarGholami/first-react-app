import { useEffect } from "react";
import { useRef, useState } from "react";

const UseRefExample = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const previousValue = useRef();
  const resetHandler = () => {
    setInputValue("");
    inputRef.current.focus();
  };
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} ref={inputRef}/>
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
      <button onClick={resetHandler} >reset</button>
    </div>
  );
};

export default UseRefExample;
