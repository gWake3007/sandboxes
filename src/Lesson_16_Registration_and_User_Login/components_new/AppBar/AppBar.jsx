import { useSelector } from "react-redux";
import Authorization from "../Authorization/Authorization";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";
import { selectLoggedIn } from "../../reduxStore/auth/selectors";

const AppBar = () => {
  const isLoginIn = useSelector(selectLoggedIn);
  return (
    <div className="flex just">
      <Navigation />
      {isLoginIn ? <UserInfo /> : <Authorization />}
    </div>
  );
};

export default AppBar;

//?{isLoginIn ? <UserInfo /> : <Authorization />} - Рендеремо за умовою якщо залогінений user чи ні.
