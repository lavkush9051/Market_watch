import "./Header.css";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
const Header = (props) => {
  const { getToken, logout } = AuthUser();
  const logoutHandler = () => {
    logout();
  };

  if (!getToken()) {
    return (
      <header className="header">
        <ul className="navigations">
          <li style={{ color: "white" }}>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </header>
    );
  }
  return (
    <header className="header d-flex justify-content-between">
      <ul className="navigations">
        <li style={{ color: "white" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ color: "white" }}>
          <Link to = "/" onClick={logoutHandler}>
            Logout
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
