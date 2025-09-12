import React from "react";
import greensalad from '../images/greeksalad.jpg';
import lemondessert from '../images/lemondessert.jpg';
import bruchetta from '../images/bruchetta.jpg';
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="highlights">
        <div className="specials1">
          <h2>Specials</h2>
          <Link to="/menu">
          <button aria-label="Online Menu">Online Menu</button>
          </Link>
        </div>
      <div className="specials-list">
        <div className='specials-item'>
        <div className="specials-image">
        <img src={greensalad} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Green Salad</h4>
        <p><span style={{ color: "#F4CE14" }}>$12.99</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
        <div className='specials-item'>
        <div className="specials-image">
        <img src={lemondessert} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Lemon Dessert</h4>
        <p><span style={{ color: "#F4CE14" }}>$05.00</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
        <div className='specials-item'>
        <div className="specials-image">
        <img src={bruchetta} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Bruchetta</h4>
        <p><span style={{ color: "#F4CE14" }}>$05.99</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
      </div>
      </div>
  );
}

export default Card;
