import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../reduxStore/auth/selectors";

const PrivateRoute = () => {
  const { isLoggedIn, token } = useSelector(selectAuth);

  //?Опрацювання помилки коли isLoggedIn - ще не підвантажилась(тобто при перезавантажуванні щоб не кидало на сторінку логування коли залогованний користувач)
  if (!isLoggedIn && token) {
    return <p>Loading...</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
