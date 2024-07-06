import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLoggedIn } from "../../reduxStore/auth/selectors";

const Navigation = () => {
  const isLoginIn = useSelector(selectLoggedIn);
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoginIn && (
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
