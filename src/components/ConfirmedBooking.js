import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking;

  const handleClose = () => {
    navigate("/reservations");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Booking Confirmed ✅</h1>
      <p>Thank you for reserving a table at Little Lemon.</p>
      {booking && (
        <div style={{
          margin: "32px auto",
          display: "inline-block",
          textAlign: "left",
          background: "#f8fafc",
          borderRadius: "12px",
          padding: "24px 32px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
        }}>
          <h3 style={{ marginTop: 0, marginBottom: 16, color: "#495E57" }}>Your Reservation Details</h3>
          <div><strong>Date:</strong> {booking.date}</div>
          <div><strong>Time:</strong> {booking.time}</div>
          <div><strong>Guests:</strong> {booking.guests}</div>
          <div><strong>Occasion:</strong> {booking.occasion}</div>
        </div>
      )}
      <button
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default ConfirmedBooking;