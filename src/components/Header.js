import React from "react";
import logo from './Logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Company Logo" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Reservations">Reservations</a></li>
          <li><a href="#OrderOnline">Order Online</a></li>
          <li><a href="#Login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
