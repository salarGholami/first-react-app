import style from "./NavBar.module.css";

const Navbar = (props) => {
  return (
    <header className={style.navBar}>
      <h2>gitarisma online shopping</h2>
      <span>{props.totalItem}</span>
    </header>
  );
};

export default Navbar;
