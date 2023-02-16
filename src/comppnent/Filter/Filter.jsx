import { useProductsActions } from "../Provider/ProductProvider";

const Filter = () => {
  const dispatch = useProductsActions();
  return (
    <div>
      <p>filter products base on:</p>
      <div>
        order by :
        <select onChange={(e) => dispatch({ type: "filter", event: e })}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
