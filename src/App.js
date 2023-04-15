import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Passport from './components/Passport'
import Home from './components/Home';
import {Routes, Route } from "react-router-dom";
import Logout from './components/Logout';
import Login  from './components/Login';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

  const getUser = () => {
    axios.get("http://localhost:5000/auth/login/success", {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  })
  .then((response) => {
    if (response.status === 200) return response.data;
    throw new Error("authentication has been failed!");
  })
  .then((res) => {
    // console.log(res.user.displayName);
    setUser(res.user.name)
  })
  .catch((err) => {
    console.log(err);
  });
  };
  useEffect(() => {

    getUser();
  }, []);


  return (
    <div className='main-body'> 
      <Header user={user} />
      <Routes>
        
           <Route path="/" element={<Home user={user} />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="/login" element={<Login />} />


          
          <Route path="/passport" element={<Passport />} />
       
      </Routes>
    </div>
    // <div className="App" style={{background:'red'}}>
    //   <h1>Google Authentication</h1>
    //   <a href="http://localhost:5000/auth/google">Login with Google</a>
    //   <a href="http://localhost:5000/auth/logout">Logout</a>

    // </div>
  );
}

export default App;
