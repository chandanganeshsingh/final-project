/* global fetchAPI */
import React, { useState, useReducer, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // <-- import useLocation
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import Header from './Header';
import Footer from './Footer';

// reducer functions...
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

// ✅ accept submitForm as prop
const Reservations = ({ submitForm }) => {
  const location = useLocation(); // <-- get location
  // Initialize state with empty or location.state.booking values
  const [date, setDate] = useState(location.state?.booking?.date || '');
  const [time, setTime] = useState(location.state?.booking?.time || '');
  const [guests, setGuests] = useState(location.state?.booking?.guests || '');
  const [occasion, setOccasion] = useState(location.state?.booking?.occasion || '');
  const [submitted, setSubmitted] = useState(false);
  const [bookedTimes, setBookedTimes] = useState({});
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  // If user navigates back with state, update form fields
  useEffect(() => {
    if (location.state?.booking) {
      setDate(location.state.booking.date || '');
      setTime(location.state.booking.time || '');
      setGuests(location.state.booking.guests || '');
      setOccasion(location.state.booking.occasion || '');
    }
  }, [location.state]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };

    // ✅ call submitForm from Main.js
    submitForm(formData);

    // optional UI update
    setBookedTimes((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), time],
    }));
    setSubmitted(true);
  };

  // ✅ Filter out booked times for the dropdown
  const unbookedTimes = date
    ? (availableTimes || []).filter(
        t => !(bookedTimes[date] || []).includes(t)
      )
    : availableTimes;

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#6E6F6E', padding: '40px 0' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxWidth: 1100,
            margin: '0 auto 40px auto',
          }}
        >
          {/* Booking Slots Card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              padding: '32px 28px',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <h3 style={{ marginBottom: 24, color: '#333' }}>Booking Slots</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0, margin: 0 }}>
              {(availableTimes || []).map(t => (
                <BookingSlot
                  key={t}
                  time={t}
                  booked={date ? (bookedTimes[date] || []).includes(t) : false}
                />
              ))}
            </ul>
          </div>

          {/* Booking Form Card */}
          <div
            style={{
              background: '#fff',
              borderRadius: '18px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              padding: '32px 28px',
              minWidth: 340,
              maxWidth: 420,
              flex: '1 1 360px',
              margin: '0 auto',
            }}
          >
            <BookingForm
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
              availableTimes={unbookedTimes}
              dispatchTimes={dispatchTimes}
              onBookingSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservations;