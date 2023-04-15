import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import  axios from 'axios';
const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const [user, setUser] = useState(null);

  // const getUser = async() => {

  //   try {
  //     await axios.get("http://localhost:5000/auth/login/success")
  //     .then((res) => {
  //       setUser(res.user)
  //       console.log(res);
  //       console.log("Token: "+ res.user)
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  
  // };
  // useEffect(() => {
  //   setTimeout(()=>{
  //     getUser();
  //   },1000)
  // }, []);

  return (
    <div className="container components" >
    <div className="row">
      <div className="col-sm-12 col-md-3"></div>
      <div className="col-sm-12 col-md-6 user-form">
        <h3 className="text-center">User Login</h3>
        {/* <p>
            {flag
                ? <span className="success-msg">User Successfully Logged In...!!!</span>
                : ""
              }
              {flag2
                ? <span style={{color:"red"}}>Email / Password incorrect</span>
                : ""
              }
              
          </p> */}

        <form className='login-form'>
      
          <Link className="btn btn-primary w-100 login-signup-btn" onClick={google}>Signin with Google</Link>
        </form>
      </div>
      <div className="col-sm-12 col-md-3 "></div>
    </div>
  </div>
  )
}
export default Login;