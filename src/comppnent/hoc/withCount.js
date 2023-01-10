import { useState } from "react";

const withCounter = (WrappedComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrappedComponent
        count={count}
        incrementHandler={incrementHandler}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default withCounter;
