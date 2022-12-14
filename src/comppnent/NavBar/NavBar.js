import style from "./NavBar.module.css";

const Navbar = ({ totalItem }) => {
  return (
    <header className={style.navBar}>
      <h2>gitarisma online shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};

export default Navbar;
