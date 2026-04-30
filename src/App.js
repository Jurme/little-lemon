import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import Booking from "./Pages/booking";
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from "./Components/confirmbooking";
function App() {
  return (
    <>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;