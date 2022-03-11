import React from 'react';
import { Link } from 'react-router-dom';
import { FaCocktail } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to='/' className="logo">
          Lets go for <span className="logo-icon"><FaCocktail /></span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;