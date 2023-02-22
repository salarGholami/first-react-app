import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import style from "./Filter.module.css";
import SelectComponent from "../../common/Select/Select";

const options = [
  { value: "", label: "All" },
  { value: "S", label: "s" },
  { value: "M", label: "M" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "XXXL", label: "XXXL" },
];

const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useProductsActions();

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption });
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <div className={style.filter}>
      <p>filter products base on:</p>

      <SelectComponent
        title="filter by size"
        value={value}
        onChange={changeHandler}
        options={options}
      />

      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
