import { useDispatch } from "react-redux";
import RegisterForm from "../components_new/RegisterForm/RegisterForm";
import { registerOperation } from "../reduxStore/auth/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const register = (userData) => {
    dispatch(registerOperation(userData));
  };
  return (
    <div>
      <h2>Register</h2>
      <br />
      <RegisterForm submit={register} />
    </div>
  );
};

export default RegisterPage;
