import { useState } from "react";

function HookArray() {
  const [counter, setCounter] = useState([]);

  const handler = () => {
    const addedh = {
      id: counter.length,
      Number: Math.floor(Math.random() * 10),
    };

    const updatedH = [...counter, addedh];
    setCounter(updatedH);
  };
  return (
    <>
      <button onClick={handler}></button>
      {counter.map((count) => {
        return (
          <>
            <li key={count.id}>{count.Number}</li>
          </>
        );
      })}
    </>
  );
}

export default HookArray;
