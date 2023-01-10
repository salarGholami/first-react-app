import withCounter from "../hoc/withCount";

const CLickCounter = ({ incrementHandler, count, name }) => {
  console.log("salar");
  return (
    <div>
      <h2 onClick={incrementHandler}>count click: {count} </h2>
    </div>
  );
};

export default withCounter(CLickCounter,10);
