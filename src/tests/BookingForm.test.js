import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders BookingForm Heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book a Table/i);
    expect(headingElement).toBeInTheDocument();
});
test('renders BookingForm inputs', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeInput = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
});
test('date input has required attribute', () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute('required');
});

test('guests input has min and max attributes', () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute('min');
    expect(guestsInput).toHaveAttribute('max');
});

import { validateForm } from '../components/BookingForm';

describe('validateForm', () => {
  const availableTimes = ['18:00', '19:00', '20:00'];

  it('returns no errors for valid input', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result).toEqual({});
  });

  it('returns error if date is missing', () => {
    const result = validateForm({
      date: '',
      time: '18:00',
      guests: 4,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.date).toBe('Date is required');
  });

  it('returns error if time is missing', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '',
      guests: 4,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.time).toBe('Time is required');
  });

  it('returns error if time is not available', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '21:00',
      guests: 4,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.time).toBe('Selected time is not available');
  });

  it('returns error if guests is missing', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '18:00',
      guests: '',
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.guests).toBe('Number of guests is required');
  });

  it('returns error if guests is less than 1', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '18:00',
      guests: 0,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.guests).toBe('Number of guests is required');
  });

  it('returns error if guests is more than 10', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '18:00',
      guests: 11,
      occasion: 'Birthday',
      availableTimes,
    });
    expect(result.guests).toBe('Number of guests must be between 1 and 10');
  });

  it('returns error if occasion is missing', () => {
    const result = validateForm({
      date: '2025-09-10',
      time: '18:00',
      guests: 4,
      occasion: '',
      availableTimes,
    });
    expect(result.occasion).toBe('Occasion is required');
  });
});

describe('BookingForm submission', () => {
  const availableTimes = ['18:00', '19:00', '20:00'];

  function setup(valid = true) {
    const onBookingSubmit = jest.fn();
    render(
      <BookingForm
        date={valid ? '2025-09-10' : ''}
        setDate={() => {}}
        time={valid ? '18:00' : ''}
        setTime={() => {}}
        guests={valid ? 4 : ''}
        setGuests={() => {}}
        occasion={valid ? 'Birthday' : ''}
        setOccasion={() => {}}
        submitted={false}
        setSubmitted={() => {}}
        availableTimes={availableTimes}
        dispatchTimes={() => {}}
        onBookingSubmit={onBookingSubmit}
      />
    );
    return onBookingSubmit;
  }

  it('calls onBookingSubmit when form is valid and submitted', () => {
    const onBookingSubmit = setup(true);
    const submitButton = screen.getByRole('button', { name: /Reserve a Table/i });
    fireEvent.click(submitButton);
    expect(onBookingSubmit).toHaveBeenCalled();
  });

  it('does not call onBookingSubmit when form is invalid', () => {
    const onBookingSubmit = setup(false);
    const submitButton = screen.getByRole('button', { name: /Reserve a Table/i });
    fireEvent.click(submitButton);
    expect(onBookingSubmit).not.toHaveBeenCalled();
  });
});