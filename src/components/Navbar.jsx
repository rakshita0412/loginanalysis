import React from 'react';
import{ Link, useNavigate } from "react-router-dom";
import "./Navbar.css";




function Navbar() {

    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("email");
        localStorage.removeItem("admin");
        navigate("/")
    }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-item"> RPR Tech</span>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
          <Link to="/" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
                User
             </Link>

            <Link to="/Admin" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
                Admin
             </Link>
             <button className="btn btn-default border  bg-light rounded-0 text-decoration-none " onClick={logout}>
                 Logout </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
