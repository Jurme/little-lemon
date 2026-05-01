
import '../App.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">Little Lemon</h2>
          <p>
            A family-owned Mediterranean restaurant serving traditional recipes
            with a modern twist.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Reservations</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Chicago, Illinois</li>
            <li>+1 234 567 890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
