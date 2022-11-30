import "./Header.css";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
const AdminHeader = (props) => {
  const { logout } = AuthUser();
  const logoutHandler = () => {
    logout();
  }
  return (
 
    <header className="header">
      <ul className="navigations d-flex justify-content-between">
        <li style={{ color: "white" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ color: "white" }}>
          <Link onClick={logoutHandler}>
            Logout
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default AdminHeader;
