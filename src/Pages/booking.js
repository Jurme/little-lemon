import '../App.css';
import BookingForm from '../Components/bookingform';

function Booking() {
  return (
    <main>
      <h1>Book a Table</h1>
      <p>Reserve your table for a memorable dining experience.</p>

      <BookingForm />

      <p>We look forward to serving you.</p>
    </main>
  );

}

export default Booking;