import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
import Story from './Story.js';
import Testimonials from './Testimonials.js';
import restauranfood from './restauranfood.jpg';
import Card from './Card.js';

function Main() {
  return (
    <main>
      <Header />
      <div className="info">
        <div className="text">
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla facilisi.</p>
          <div className="reserve-button">
            <button>Reserve a Table</button>
          </div>
        </div>
        <div className="image">
        <img src={restauranfood} alt="Restaurant" width={375} height={325} />
        </div>
      </div>
      <Card />
      <Testimonials />
      <Story />
      <Footer />
    </main>
  );
}
export default Main;