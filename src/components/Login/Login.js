import { useState } from "react";
import AuthUser from "../AuthUser";
import "./Login.css";
import profile from "../../assets/login.jpeg";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setToken } = AuthUser();

  // on form submit
  const submitForm = () => {
    //console.log({email:email,password:password});
    let credentials = {
      username: email,
      password: password,
    };
    const url = "http://localhost:9090/token";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(credentials),
    })
      .then(function (response) {
        if(response.status===406){
          console.log("not found")
          alert("Invalid Username or Password")
          return;
        }
        response.json().then(function (data) {
          console.log(data);
          setToken(data.token);
        });
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  };

  return (
    <div className="mainclass">
      <div className="submain">
        <div className="login">
          <div className="imgs">
            <div className="containerimage">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <p className="admin-text">Admin Login</p>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="name inputField"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="second input">
              <input
                type="password"
                placeholder="Password"
                className="name inputField"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login_button">
              <button
                className="login-button"
                type="button"
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
