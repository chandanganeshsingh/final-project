import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import hamburger from '../images/icon _hamburger menu.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="header">
      <span className="Menu-logo">
      <img src={logo} alt="Company Logo" />
      <span className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburger} alt="Menu Icon" width={30} height={30}/>
      </span>
      </span>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
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
