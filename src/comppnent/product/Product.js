const Product = (props) => {
  return (
    <>
      <p>product name : {props.name} course</p>
      <p>product price : {props.price}</p>
      {props.children}
    </>
  );
};

export default Product;
