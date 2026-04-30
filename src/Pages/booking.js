import React, { useReducer, useState } from "react";
import BookingForm from "../Components/bookingform";
import { fetchAPI } from "../api";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";

// Initialize times for today
const initializeTimes = () => {
  return fetchAPI(new Date());
};

// Update times when date changes
const updateTimes = (state, selectedDate) => {
  return fetchAPI(new Date(selectedDate));
};

function Booking() {
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const navigate = useNavigate();

const submitForm = (formData) => {
  const result = submitAPI(formData);

  if (result) {
    navigate("/confirmed");
  }
};
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div>
      <h1>Booking Page</h1>

      <BookingForm
        availableTimes={availableTimes}
        date={date}
        setDate={setDate}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Booking;