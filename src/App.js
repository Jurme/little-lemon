import './App.css';
import logo from './logo.svg';
function App() {
  return (
    <>
    <header>
      <img src={logo} height={40}  width={40} alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
         </ul>
      </nav>
    </header>

    <footer>
      <p> All right reserved</p>
    </footer>
    </>

  );
}

export default App;
