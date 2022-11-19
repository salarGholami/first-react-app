import { useState } from "react";

function Hookcounter() {
  const [count, setcount] = useState(0);

  const addOneHandler = () => {
    setcount((prevcount) => prevcount + 1);
  };

  const addTwoHandler = () => {
    setcount((prevcount) => prevcount + 2);
  };
  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) {
      setcount((prevcount) => prevcount + 1);
    }
  };

  return (
    <>
      <h2> count - {count}</h2>
      <button onClick={addOneHandler}>add on</button>
      <button onClick={addTwoHandler}>add two</button>
      <button onClick={addFiveHandler}>add on</button>
    </>
  );
}

export default Hookcounter;
