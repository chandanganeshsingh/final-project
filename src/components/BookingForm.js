import React from 'react';
import '../App.css';

const BookingForm = () => {
  return (
    <div style={{ padding: '20px 12.5%', maxWidth: '600px', margin: 'auto', color: '#333', fontFamily: 'Arial, sans-serif' }}>
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', fontSize: '16px', color: '#555' }}>
            <h2 style={{ textAlign: 'center', color: '#000', fontStyle: 'Strong' }}>Book a Table</h2>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input
          type="submit"
          value="Reserve a Table"
          style={{
            backgroundColor: '#F4CE14',
            color: '#000000',
            border: 'none',
            margin: '10px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: 'large',
            fontWeight: 'bold',
            cursor: 'pointer',
            height: '60px',
            width: '200px',
            padding: 'auto',
            borderRadius: '10px'
          }}
        />
        </form>
    </div>
  );
};

export default BookingForm;