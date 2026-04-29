import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Booking from './Pages/booking';
import Header from './Components/header';
import Footer from './Components/footer';


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