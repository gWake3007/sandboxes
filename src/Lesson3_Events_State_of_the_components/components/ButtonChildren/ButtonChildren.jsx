import css from "./ButtonChildren.module.css";

const ButtonChildren = ({ children }) => {
  return <button className={css.button}>{children}</button>;
};

export default ButtonChildren;
