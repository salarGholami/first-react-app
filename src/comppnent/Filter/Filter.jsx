import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import Select from "react-select";
import style from "./Filter.module.css";

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
      <div className={style.selectContainer}>
        <span>order by :</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={style.select}
        />
      </div>

      <div className={style.selectContainer}>
        <span>order by :</span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={style.select}
        />
      </div>
    </div>
  );
};

export default Filter;
