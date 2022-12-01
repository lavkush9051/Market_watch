import { Routes, Route} from "react-router-dom";
import Home from "../Home";
import Admin from "../components/Admin/Admin";
import AdminPanel from "../components/Admin/AdminPanel";

const AuthGuest =()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/admin' element = {<Admin/> } />
                <Route path='/login' element = {<AdminPanel/>} />
                <Route path='/adminpanel' element = {<AdminPanel/>} />
            </Routes>
        </div>
        
    )
}
export default AuthGuest;