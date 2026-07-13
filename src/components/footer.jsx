import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;