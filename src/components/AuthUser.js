import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthUser = () =>{
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        //console.log("userToken:",userToken)
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    const saveToken =(token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        setToken(token);
        navigate('/admin');
    }

    const logout =()=>{
        sessionStorage.clear()
        navigate('/');
    }

    return {
        setToken:saveToken,
        logout,
        getToken,
        token
    }
    
}

export default AuthUser