import '../App.css';
import logo from '../logo.svg';

function Header() {
  return (
    <>
    <header className="header">
      <img src={logo} height={40}  width={40} alt="Little Lemon Logo" />
      <nav className="nav">
        <ul className='nav-list'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
         </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;
