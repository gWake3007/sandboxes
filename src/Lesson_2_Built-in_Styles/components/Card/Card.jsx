import css from "./Card.module.css";
import Button from "../Button/Button.jsx";
const Card = ({ name, email, phone }) => {
  return (
    <>
      <div className={css.container} style={{ backgroundColor: "red" }}>
        <h2>{name}</h2>
        <hr />
        <div>
          {email ? <p>Email:{email}</p> : false}
          {phone && <p>Phone:{phone}</p>}
          {/* <p>addres:{street}</p> */}
        </div>
      </div>
      <hr />
      <Button text="qwerty" />
    </>
  );
};

export default Card;

//!false null undefined не рендереться на реакті. А також не працюють звичайні if else ВИКОРИСТОВУЄМО ТЕРНАРНИКИ!!!
//! style={{ backgroundColor: "red" }} - Так не бажанно стилізувати. Але можливо що буде зустрічатись така стилізація.
