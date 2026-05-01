import React, { useReducer, useState } from "react";
import BookingForm from "../Components/bookingform";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ MUST export for tests
export const initializeTimes = () => {
  return fetchAPI(new Date());
};

// ✅ MUST export for tests
export const updateTimes = (state, selectedDate) => {
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
      <h1
      style={{

        textAlign:"center",
        margin: "32px 0"
      }}
      >
      Booking Page
      </h1>
      <BookingForm
        availableTimes={availableTimes}
        date={date}
        setDate={setDate}
        updateTimes={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default Booking;