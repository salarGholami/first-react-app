import { useEffect } from "react";
import { useState } from "react";

function FunctionalCounter() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("document title updating");
    document.title = `click ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>count : {count}</button>
    </div>
  );
}

export default FunctionalCounter;
