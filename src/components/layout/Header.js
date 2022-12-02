import "./Header.css";
import logo from "../../assets/Market Watch44.png";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";

const Header = (props) => {
  const { logout } = AuthUser();

  const logoutHandler = () => {
    logout();
  };
  return (
    <header className="header">
      <div className="container-lg">
        <div>
          <img className="logo " src={logo} alt="logo" />
        </div>
        <div className="item">
          <div to="/" className="heading" style={{ fontSize: 25 }}>
            {props.items[0]}
          </div>
        </div>
        <div className="item-logout">
          <Link className="heading" onClick={logoutHandler}>
            {props.items[1]}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
