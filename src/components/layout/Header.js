import React, {Fragment} from 'react';
// import classes from './Header.module.css'
import "./Header.css"
import Autocomplete from '../Autocomplete';

const Header = (props)=> {
    return(
        
            <header className="header">
                
                <ul className='navigations'>
                    <li>Home</li>
                    <li>
                        Admin
                    </li>
                </ul>
                
                {/* <Autocomplete
                    suggestions={['TATA STEEL LIMITED','TATA CONSULTENCY SERVICE', 'TATA MOTORS']}
                    /> */}
            </header>

        
    )
}

export default Header