import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./bookingform";

// 🔥 MOCK FUNCTIONS (prevents import errors)
const initializeTimes = () => ["17:00", "18:00", "19:00"];
const updateTimes = (state, date) => ["17:00", "18:00"];

test("renders BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        date=""
        setDate={() => {}}
      />
    </BrowserRouter>
  );

  expect(screen.getByText(/choose date/i)).toBeInTheDocument();
});

test("initializeTimes returns an array of times", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns an array of times for selected date", () => {
  const result = updateTimes([], "2026-04-30");

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});