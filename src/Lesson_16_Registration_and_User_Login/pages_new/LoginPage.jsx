import { useDispatch } from "react-redux";
import LoginForm from "../components_new/LoginForm/LoginForm";
import { loginOperation } from "../reduxStore/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const login = (userData) => {
    dispatch(loginOperation(userData));
  };
  return (
    <div>
      <h2>Login</h2>
      <br />
      <LoginForm submit={login} />
    </div>
  );
};

export default LoginPage;
