import { useState } from "react";
import Header from "../layout/Header";
import AuthUser from "../AuthUser";

const Login = () => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {setToken} = AuthUser();

  // on form submit
  const submitForm =()=>{
    
    //console.log({email:email,password:password});
    let credentials ={
      username:email,
      password:password
    }
    const url = 'http://localhost:9090/token'
    fetch(url, {
      method: 'POST',
      //mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',

      },
      body: JSON.stringify(credentials),
    })
    .then(function(response){
      response.json().then(function(data) {
          console.log(data);
          setToken(data.token);
      });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
  }

  return (
    <div>
      <Header/>
   
    <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                        id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>
                </div>
            </div>
        </div>
      </div>
    );
};
export default Login;
