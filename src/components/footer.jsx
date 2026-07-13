import "./Footer.css";
import About from "./About";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="./aboutus">About</a>
        <Link to="/contact">Contact Us</Link>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms</a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;