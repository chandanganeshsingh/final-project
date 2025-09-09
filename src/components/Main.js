/* global submitAPI */
import React from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Story from "./Story.js";
import Testimonials from "./Testimonials.js";
import restauranfood from "../images/restauranfood.jpg";
import Card from "./Card.js";
import Reservations from "./Reservations.js";
import ConfirmedBooking from "./ConfirmedBooking.js";

// Other pages
import About from "./About.js";
import Menu from "./Menu.js";
import OrderOnline from "./OrderOnline.js";
import Login from "./Login.js";

function Home() {
  return (
    <>
      <Header />
      <div className="info">
        <div className="text">
          <h2>Little Lemon</h2>
          <p>Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dapibus nisl nec nibh blandit, non placerat nisl finibus. Nulla
            facilisi.
          </p>
          <div className="reserve-button">
            <Link to="/reservations">
              <button aria-label="Reserve a Table">Reserve a Table</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src={restauranfood}
            alt="Restaurant"
            width={375}
            height={325}
          />
        </div>
      </div>
      <Card />
      <Testimonials />
      <Story />
      <Footer />
    </>
  );
}

function Main() {
  const navigate = useNavigate();

  // ✅ API submission handler
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      const { date, time, guests, occasion } = formData;
      navigate("/confirmed", { state: { booking: { date, time, guests, occasion } } });
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservations submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/order-online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Main;
