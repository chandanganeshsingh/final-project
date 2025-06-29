import React from 'react';
import restauranfood from './restauranfood.jpg';

function Main() {
  return (
    <main>
      <h2>Little Lemon</h2>
      <p>Chicago</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src={restauranfood} alt="Restaurant" width={300} height={200} />
    </main>
  );
}
export default Main;