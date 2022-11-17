
import "../layout/Header.css"
import './admin.css';
import Header from "../layout/Header";

const Admin = ()=>{
    return(
        <div className='container'>
            <Header/>
            <div className='row'>
                <button>Select excel sheet</button>
                
            </div>
            <div className="row">
                <button>Update db</button>
            </div>
        </div>
    )
}

export default Admin;