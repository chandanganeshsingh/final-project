import React from 'react';
import restaurant from '../images/restaurant chef B.jpg';
function Footer() {
  return (
    <footer>
      <div className="footer1">
        <div className="footer-img">
          <img src={restaurant} alt="Image1" width={162} height={279} />
        </div>
        <div className="footer-navigation">
          <p><b>Doormat Navigation</b></p>
          <ul className='footer-bullet'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Reservations">Reservations</a></li>
            <li><a href="#OrderOnline">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <p><b>Contact</b></p>
          <ul className='footer-bullet'>
            <li><a href="#Address">Address</a></li>
            <li><a href="#PhoneNumber">Phone number</a></li>
            <li><a href="#Email">Email</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p><b>Social Media Links</b></p>
          <ul className='footer-bullet'>
            <li><a href="#Facebook">Facebook</a></li>
            <li><a href="#Instagram">Instagram</a></li>
            <li><a href="#Twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-address">
      <p>&copy; 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;