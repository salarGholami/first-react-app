import style from "./Search.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
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
