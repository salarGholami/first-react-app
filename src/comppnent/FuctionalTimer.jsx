import { useEffect } from "react";
import { useState } from "react";

const FunctionalTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hi salar");
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return <div>this is timer</div>;
};

export default FunctionalTimer;
 