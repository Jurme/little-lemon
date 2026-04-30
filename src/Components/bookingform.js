import { useEffect, useState } from "react";

function BookingForm({ availableTimes, setDate, date, updateTimes, submitForm }) {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Auto-select first available time when times change
  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setTime(availableTimes[0]);
    } else {
      setTime("");
    }
  }, [availableTimes]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (updateTimes) {
      updateTimes(newDate);        // This triggers fetchAPI
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests: Number(guests),
      occasion,
    };
    console.log("Reservation Submitted:", formData);
  submitForm(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        type="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {(availableTimes || []).map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!time}>
        Make Reservation
      </button>
    </form>
  );
}

export default BookingForm;