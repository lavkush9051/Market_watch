import { Routes, Route} from "react-router-dom";
import Home from "../Home";
import Login from "../components/Login/Login";

const Guest =()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/admin' element = {<Login/> } />
                <Route path='/login' element = {<Login/>} />
                <Route path='/adminpanel' element = {<Login/>} />

            </Routes>
        </div>
        
    )
}
export default Guest;