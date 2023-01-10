import withCounter from "../hoc/withCount";

const HoverCounter = ({ incrementHandler, count }) => {
  return (
    <div>
      <h2 onMouseOver={incrementHandler}>count Hover: {count}</h2>
    </div>
  );
};

export default withCounter(HoverCounter,5);
