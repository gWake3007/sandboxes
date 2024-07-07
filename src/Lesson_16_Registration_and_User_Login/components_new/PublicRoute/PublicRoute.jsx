import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../reduxStore/auth/selectors";

const PublicRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  //?PublicRoute - Потрібен для того щоб не було доступу до реєстрації чи логуванні для вже залогованного користувача.Перекидання здійснюється на сторінку /tasks.

  if (!isLoggedIn && token) {
    return <p>Loading...</p>;
  }

  if (isLoggedIn && token) {
    return <Navigate to="/tasks" />;
  }
  return <Outlet />;
};

export default PublicRoute;
