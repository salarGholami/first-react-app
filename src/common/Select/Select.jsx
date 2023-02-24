import style from "./Select.module.css";
import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  console.log( )
  return (
    <div className={style.selectContainer}>
      <span>{title}</span>
      <Select {...rest} className={style.select} />
    </div>
  );  
};

export default SelectComponent;
