import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";

const Filter = () => {
  const [value, setValue] = useState("");
  const dispatch = useProductsActions();

  const changeHandler = (e) => {
    setValue(e.target.value);
    dispatch({ type: "filter", event: e });
  };

  return (
    <div>
      <p>filter products base on:</p>
      <div>
        order by :
        <select onChange={changeHandler} value={value}>
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
