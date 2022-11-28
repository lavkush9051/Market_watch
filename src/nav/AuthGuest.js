import { Routes, Route} from "react-router-dom";
import Home from "../Home";
import Admin from "../components/Admin/Admin";

const AuthGuest =()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/admin' element = {<Admin/> } />
                <Route path='/login' element = {<Admin/>} />
            </Routes>
        </div>
        
    )
}
export default AuthGuest;