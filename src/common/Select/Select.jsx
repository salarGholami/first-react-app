import style from "./Select.module.css";
import Select from "react-select";

const SelectComponent = ({ value, onChange, options, title }) => {
  return (
    <div className={style.selectContainer}>
      <span>{title}</span>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        className={style.select}
      />
    </div>
  );
};

export default SelectComponent;
