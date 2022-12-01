import "./Header.css";
import logo from "../../assets/Market Watch44.png";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    // <header className="header">
    //   <ul className="navigations">
    //     <li style={{ color: "white" }}>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <img className="logo" src={logo} alt="logo"/>
    //     </li>
    //   </ul>
    // </header>
    <header className="header">
      <div className="container-lg">
        <div>
          <img className="logo " src={logo} alt="logo" />
        </div>
        <div className="item">
          <div to="/" className="heading" style={{fontSize:25}}>
            Welcome To Market Watch App
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
