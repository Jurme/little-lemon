import '../App.css';
import BookingForm from '../Components/bookingform';
import { useReducer } from 'react';


const seededTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
const initializeTimes = () => seededTimes;

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'updateTimes':
        return seededTimes;
      default:
        return state;
    }
  };

function Booking() {

  const [availableTimes, dispatch] = useReducer(
  updateTimes,
  undefined,
  initializeTimes
);
  return (
    <main>
      <h1>Book a Table</h1>
      <p>Reserve your table for a memorable dining experience.</p>

      <BookingForm 
      availableTimes={availableTimes}
      dispatch={dispatch}
      />

      <p>We look forward to serving you.</p>
    </main>
  );

}

export default Booking;