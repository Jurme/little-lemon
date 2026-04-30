import '../App.css';
import {useState } from 'react';

function BookingForm({availableTimes, dispatch}) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("birthday");
  

 const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        date,
        time,
        guests,
        occasion
    }
    console.log("Reservation Submitted:", formData);
}

  return (
    <>
    <form onSubmit={handleSubmit} >                          
        
      <label htmlFor="res-date">Choose date</label>
      <input 
      type="date" 
      id="res-date" 
      value={date}
      onChange={(e)=> setDate(e.target.value)} />

      <label htmlFor="res-time">Choose time</label>
      <select 
      id="res-time"
      value={time}
      onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time) => (
            <option 
            key={time} value={time}>{time}
            </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
      type="number" 
      id="guests" min="1" 
      max="10" 
      placeholder="1"
      value={guests}
      onChange={(e) => setGuests(parseInt(e.target.value))} />

      <label htmlFor="occasion">Occasion</label>

      <select 
      id="occasion"
       value={occasion} 
       onChange={(e) => setOccasion(e.target.value)}>
        <option>
            Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
    </>
  );
}

export default BookingForm;
    