import Header from "./Components/header";
import Footer from "./Components/footer";
import Home from "./Pages/home";
import Booking from "./Pages/booking";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;