import React from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import Header from './Header';
import Footer from './Footer';

const Reservations = ({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  submitted, setSubmitted,
  bookedTimes, availableTimes,
  unbookedTimes, dispatchTimes,
  submitForm
}) => {
  // Booking submit handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#6E6F6E', padding: '40px 0' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            gap: '40px',
            justifyContent: 'center',
            maxWidth: 800,
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