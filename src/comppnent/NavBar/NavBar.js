import style from "./NavBar.module.css";

const Navbar = ({ totalItem }) => {
  console.log("NavBar.js render")
  return (
    <header className={style.navBar}>
      <h2>gitarisma online shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};

export default Navbar;
