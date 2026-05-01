import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} height={80} width={180} alt="Little Lemon Logo" />

      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/under-construction">About</Link></li>
          <li><Link to="/under-construction">Menu</Link></li>
          <li><Link to="/booking">Reservation</Link></li>
          <li><Link to="/under-construction">Order Online</Link></li>
          <li><Link to="/under-construction">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;