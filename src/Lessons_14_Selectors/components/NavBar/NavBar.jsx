import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import clsx from "clsx";

const getClassNames = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const NavBar = () => {
  return (
    <nav>
      <NavLink className={getClassNames} to="/">
        Home
      </NavLink>
      <NavLink className={getClassNames} to="/products">
        Products
      </NavLink>
      <NavLink className={getClassNames} to="/todo">
        Todo
      </NavLink>
    </nav>
  );
};

export default NavBar;

//?Функція getClassNames використовує clsx і коллбек щоб змінювати класс зі звичайного на isActive(Для іншої стилізації при активному стані)
