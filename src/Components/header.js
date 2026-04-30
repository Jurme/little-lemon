import '../App.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} height={40} width={40} alt="Little Lemon Logo" />

      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservation</Link></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
