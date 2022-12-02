import "./adminPanel.css";
import upload from "../../assets/Upload.png";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate()
  const header = {
    heading:"Admin Panel",
    logout: "Logout"
  }

  const updateBtn =() =>{
    navigate('/admin');
  }

  return (
    <div>
      <Header items ={[header.heading,header.logout]} />
      <div className="grid-container">
        <div style={{marginLeft:"21px"}}>
        <div className="grid-item">
          <img className="login-img" src={upload} alt="Avatar"/>
        </div>
        <div >
          <button onClick={updateBtn} className="update-btn">Update</button>
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default AdminPanel;
