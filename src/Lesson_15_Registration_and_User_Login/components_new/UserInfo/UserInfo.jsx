import { useDispatch } from "react-redux";
import { loginOutOperation } from "../../reduxStore/auth/operations";

const UserInfo = () => {
  const dispath = useDispatch();

  const handleLogOut = () => {
    dispath(loginOutOperation());
  };
  return (
    <div className="flex">
      <p>Welcome , user name</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserInfo;
