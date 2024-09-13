 

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Modna Oaza</h2>
      <ul className="nav-links">
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
        <li><Link to="/login">Prijava</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
