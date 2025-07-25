import React from "react";
import greensalad from './greeksalad.jpg';
import lemondessert from './lemondessert.jpg';
import bruchetta from './bruchetta.jpg';

function Card() {
  return (
    <div className="highlights">
        <div className="specials1">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
      <div className="specials-list">
        <div className='specials-item'>
        <div className="specials-image">
        <img src={greensalad} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Special Dish</h4>
        <p><span color={'#F4CE14'}>$12.99</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
        <div className='specials-item'>
        <div className="specials-image">
        <img src={lemondessert} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Special Dish</h4>
        <p><span color='#F4CE14'>$12.99</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
        <div className='specials-item'>
        <div className="specials-image">
        <img src={bruchetta} alt="Specials" width="100%" height="200" />
        </div>
        <aside className="heading">
        <h4>Special Dish</h4>
        <p><span color='#F4CE14'>$12.99</span></p>
        </aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
        <p className='order-delivery'>Order Delivery</p>
        </div>
      </div>
      </div>
  );
}

export default Card;
