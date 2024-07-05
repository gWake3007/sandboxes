import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;