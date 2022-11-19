const Product = (props) => {
  return (
    <>
      <p>product name : {props.name} course</p>
      <p>product price : {props.price}</p>
      <p>userName : {props.userData}</p>
    </>
  );
};

export default Product;
