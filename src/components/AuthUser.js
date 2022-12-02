import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = () =>{
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    const saveToken =(token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        setToken(token);
        navigate('/adminpanel');
    }

    const logout =()=>{
        sessionStorage.clear()
        navigate('/login');
    }

    return {
        setToken:saveToken,
        logout,
        getToken,
        token
    }
    
}

export default AuthUser