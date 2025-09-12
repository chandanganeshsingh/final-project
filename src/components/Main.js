/* global fetchAPI, submitAPI */
import React, { useState, useReducer } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Story from "./Story.js";
import Testimonials from "./Testimonials.js";
import restauranfood from "../images/restauranfood.jpg";
import Card from "./Card.js";
import Reservations from "./Reservations.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import About from "./About.js";
import Menu from "./Menu.js";
import OrderOnline from "./OrderOnline.js";
import Login from "./Login.js";

// reducer functions
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}
export function initializeTimes() {
  return fetchAPI(new Date());
}

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

  // State moved from Reservations.js
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookedTimes, setBookedTimes] = useState({});
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  // Submission handler
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      const { date, time, guests, occasion } = formData;
      // Update bookedTimes here
      setBookedTimes((prev) => ({
        ...prev,
        [date]: [...(prev[date] || []), time],
      }));
      setSubmitted(true);
      navigate("/confirmed", { state: { booking: { date, time, guests, occasion } } });
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  // Filter out booked times for the dropdown
  const unbookedTimes = date
    ? (availableTimes || []).filter(
        t => !(bookedTimes[date] || []).includes(t)
      )
    : availableTimes;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/reservations"
        element={
          <Reservations
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            submitted={submitted}
            setSubmitted={setSubmitted}
            bookedTimes={bookedTimes}
            availableTimes={availableTimes}
            unbookedTimes={unbookedTimes}
            dispatchTimes={dispatchTimes}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/order-online" element={<OrderOnline />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Main;
