import css from "./Card_List.module.css";
import users from "../../data.json";
import Card from "../Card/Card";

const Card_List = () => {
  return (
    <div className={css.container}>
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            // address={user.address}
            email={user.email}
            phone={user.phone}
          />
        );
      })}
      <Card
        key={777}
        name="Serhii"
        phone={777}
        email="qwerty@qwerty.com"
        // address="motel"
      />
    </div>
  );
};

export default Card_List;
