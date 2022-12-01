import "./adminPanel.css";
import databaseImg from "../../assets/database1.png";
import AdminHeader from "../layout/AdminHeader";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate()
 

  const updateBtn =() =>{
    navigate('/admin');
  }

  return (
    <div>
      <AdminHeader />
      {/* <div className="admincard">
        <img src={image} alt="Avatar" />
        <div className="admincard-container">
          <Button>Update Database</Button>
        </div>
      </div> */}
      <div className="grid-container">
        <div style={{width:"274px"}}>
        <div className="grid-item">
          <img className="login-img" src={databaseImg} alt="Avatar"/>
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
