import { useProducts } from "../Provider/ProductProvider";
import style from "./NavBar.module.css";

const Navbar = () => {
  const products = useProducts();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={style.navBar}>
      <h2>gitarisma online shopping</h2>
      <span>{totalItem}</span>
    </header>
  );
};

export default Navbar;
