import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import style from "./Filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/search/Search";

const filterOptions = [
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
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useProductsActions();

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    console.log(selectedOption);
    setSort(selectedOption);
    dispatch({ type: "sort", selectedOption });
  };

  return (
    <section>
      <SearchBar filter={filter} />

      <div className={style.filter}>
        <p>filter products base on:</p>
        
        <SelectComponent
          title="filter by size"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />

        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </section>
  );
};

export default Filter;
