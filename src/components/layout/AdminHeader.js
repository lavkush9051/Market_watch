import "./Header.css";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";
import logo from "../../assets/Market Watch44.png";

const AdminHeader = (props) => {
  const { logout } = AuthUser();
  
  const logoutHandler = () => {
    logout();
  }
  return (
 
    // <header className="header">
    //   <ul className="navigations d-flex flex-end">
    //     {/* <li style={{ color: "white" }}>
    //       <Link to="/">Home</Link>
    //     </li> */}
    //     <li style={{ color: "white" }}>
    //       <Link onClick={logoutHandler}>
    //         Logout
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
    <header className="header">
    <div className="container-lg">
      <div>
        <img className="logo " src={logo} alt="logo" />
      </div>
      <div className="item-logout">
        <Link className="heading" onClick={logoutHandler}>
          Logout
        </Link>
      </div>
    </div>
  </header>
  );
};
export default AdminHeader;
