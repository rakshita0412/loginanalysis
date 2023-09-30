import React from 'react';
import{ Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-item">Company Name</span>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
          <Link to="/" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
                User
             </Link>

            <Link to="/Admin" className="btn btn-default border  bg-light rounded-0 text-decoration-none">
                Admin
             </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
