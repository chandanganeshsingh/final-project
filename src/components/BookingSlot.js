import React from 'react';

const BookingSlot = ({ time, booked }) => (
  <span style={{
    display: 'flex', flexDirection: 'column', listStyle: 'none',
    padding: '8px 0',
    color: booked ? '#aaa' : '#000',
    textDecoration: booked ? 'line-through' : 'none'
  }}>
    {time} {booked ? '(Booked)' : '(Available)'}
  </span>
);

export default BookingSlot;