import style from "./Search.module.css";
import { useState } from "react";
import { useProductsActions } from "../../comppnent/Provider/ProductProvider";

const SearchBar = ({ filter }) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });

    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className={style.formControl}>
      <div>search for </div>
      <input
        type="text"
        placeholder="search by ..."
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
