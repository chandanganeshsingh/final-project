import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';

export default function Header() {
  return (
    <>
    <header className="header">
      <img src={logo} alt="Company Logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
    </>
  )
}
