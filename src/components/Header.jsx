import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'



const Header = (props) => {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };


  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light main-header ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                  TechLift.pk/MERN03
                </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                 
                
                {props.user ?
                  <li className="nav-item">
                    <Link className="nav-link" onClick={logout}>
                      Logout
                    </Link>
                  </li> : (  <li className="nav-item">
                    <Link className="nav-link" to="/login"  >
                      Login
                    </Link>
                  </li>
                  )}
                    {/* <li className="nav-item">
                    <Link className="nav-link" to="http://127.0.0.1:8080/logout">
                      Logout
                    </Link>
                  </li> */}
                  {props.user? (<li className="nav-item current-user">
                    <Link className="nav-link" to="">
                      {props.user}
                    </Link>
                  </li>
                 ) : ""}
                 
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Header