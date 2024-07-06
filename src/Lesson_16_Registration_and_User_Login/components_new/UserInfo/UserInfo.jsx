import { useDispatch, useSelector } from "react-redux";
import { loginOutOperation } from "../../reduxStore/auth/operations";
import { selectUser } from "../../reduxStore/auth/selectors";

const UserInfo = () => {
  //?selectorUserName - підтягуємо з selectors.js селектор state.auth.user(тобто ім'я користувача який авторизувався/зареєструвався)
  // const selectorUserName = useSelector(selectUser);
  //?Також одразу робимо деструкторизацію та з об'єкта дістаємо саму властивість name.
  const { name } = useSelector(selectUser);
  const dispath = useDispatch();

  const handleLogOut = () => {
    dispath(loginOutOperation());
  };
  return (
    <div className="flex">
      <p>Welcome , {name}</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserInfo;
