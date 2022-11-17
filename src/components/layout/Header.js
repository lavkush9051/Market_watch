import "./Header.css"
import {Link} from "react-router-dom";

const Header = (props)=> {
    return(
            <header className="header"> 
                <ul className='navigations'>
                    <li style={{color:"white"}}>
                        <a><Link to='/'>Home</Link></a>
                    </li>
                    
                </ul>
            </header>  
    )
}
export default Header