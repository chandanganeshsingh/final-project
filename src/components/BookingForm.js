import React, { useState, useEffect } from 'react';

const BookingForm = ({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  submitted, setSubmitted,
  availableTimes,
  dispatchTimes,
  onBookingSubmit
}) => {
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // HTML5: today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const currentErrors = validateForm({ date, time, guests, occasion, availableTimes });
    setErrors(currentErrors);
    setFormValid(Object.keys(currentErrors).length === 0);
  }, [date, time, guests, occasion, availableTimes]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    switch (id) {
      case 'res-date':
        setDate(value);
        dispatchTimes({ type: 'UPDATE_TIMES', date: value });
        break;
      case 'res-time':
        setTime(value);
        break;
      case 'guests':
        setGuests(Number(value));
        break;
      case 'occasion':
        setOccasion(value);
        break;
      default:
        break;
    }
    const newErrors = validateForm({
      date: id === 'res-date' ? value : date,
      time: id === 'res-time' ? value : time,
      guests: id === 'guests' ? Number(value) : guests,
      occasion: id === 'occasion' ? value : occasion,
      availableTimes
    });
    setErrors(newErrors);
    setFormValid(Object.keys(newErrors).length === 0);
  };

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      'res-date': true,
      'res-time': true,
      'guests': true,
      'occasion': true
    });
    const currentErrors = validateForm({ date, time, guests, occasion, availableTimes });
    setErrors(currentErrors);
    setFormValid(Object.keys(currentErrors).length === 0);
    if (Object.keys(currentErrors).length > 0) return;
    onBookingSubmit(e);
  };

  return (
    <div style={{ padding: '20px 12.5%', maxWidth: '600px', margin: 'auto', color: '#000', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          maxWidth: '600px',
          gap: '20px',
          fontSize: '16px',
          color: '#000'
        }}
        noValidate
      >
        <h2 style={{ textAlign: 'center', color: '#000', fontStyle: 'Strong' }}>Book a Table</h2>

        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleInputChange}
          onBlur={handleBlur}
          min={today}
          required
        />
        {touched['res-date'] && errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}

        <label htmlFor="res-time">Choose time</label>
        <select
          type="time"
          id="res-time"
          value={time}
          onChange={handleInputChange}
          onBlur={handleBlur}
          disabled={!availableTimes || availableTimes.length === 0}
          required
        >
          <option value="">
            {(!availableTimes || availableTimes.length === 0)
              ? "No slots available"
              : "Select a time"}
          </option>
          {(availableTimes || []).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {touched['res-time'] && errors.time && <span style={{ color: 'red' }}>{errors.time}</span>}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        />
        {touched['guests'] && errors.guests && <span style={{ color: 'red' }}>{errors.guests}</span>}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleInputChange}
          onBlur={handleBlur}
          required
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
        {touched['occasion'] && errors.occasion && <span style={{ color: 'red' }}>{errors.occasion}</span>}

        <input
          type="submit"
          aria-label="Reserve a Table"
          value="Reserve a Table"
          disabled={!formValid}
          style={{
            backgroundColor: formValid ? '#F4CE14' : '#ccc',
            color: '#000000',
            border: 'none',
            margin: '10px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: 'large',
            fontWeight: 'bold',
            cursor: formValid ? 'pointer' : 'not-allowed',
            height: '60px',
            width: '200px',
            borderRadius: '10px'
          }}
        />
      </form>
    </div>
  );
};

export default BookingForm;

export function validateForm({ date, time, guests, occasion, availableTimes }) {
  const errors = {};

  if (!date) {
    errors.date = "Date is required";
  }

  if (!time) {
    errors.time = "Time is required";
  } else if (!availableTimes.includes(time)) {
    errors.time = "Selected time is not available";
  }

  if (!guests) {
    errors.guests = "Number of guests is required";
  } else if (guests < 1 || guests > 10) {
    errors.guests = "Number of guests must be between 1 and 10";
  }

  if (!occasion) {
    errors.occasion = "Occasion is required";
  }
  return errors;
}