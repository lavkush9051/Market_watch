import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Admin from "./components/Admin/Admin";
const App = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/Admin' element = {<Admin/> } />
            </Routes>
        </BrowserRouter>
        
    )
}
export default App;
