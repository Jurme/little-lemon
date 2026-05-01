import { useEffect, useState } from "react";
import "../App.css";


function BookingForm({
  availableTimes,
  setDate,
  date,
  updateTimes,
  submitForm,
}) {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    } else {
      setTime("");
    }
  }, [availableTimes]);

  const isFormValid =
    date &&
    time &&
    guests >= 1 &&
    guests <= 10;

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    updateTimes(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking Form">

      {/* DATE */}
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      {/* TIME */}
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* GUESTS */}
      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      {/* OCCASION */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      {/* SUBMIT BUTTON */}
      <button 
        type="submit"
        disabled={!isFormValid}
        aria-label="On Click"
         style={{
            alignSelf: "flex-start",
            backgroundColor: "#F4CE14",
            color: "#2C2C2C",
            border: "none",
            padding: "14px 32px",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 700,
            cursor: "pointer",
          }}
      >
        Make Reservation
      </button>

    </form>
  );
}

export default BookingForm;