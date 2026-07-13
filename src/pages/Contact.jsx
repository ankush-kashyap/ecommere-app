import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="contact-description">
          Have a question or feedback? Feel free to reach out.
          This website is a portfolio project created for educational purposes.
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>yourname@email.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/ankush-kashyap"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ankush-kashyap
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://linkedin.com/in/ankush-kashyap-dev"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/Ankush
              </a>
            </div>
          </div>
        </div>

        <div className="contact-note">
          <p>
            ⚠️ This is a demo e-commerce website built with React for portfolio
            purposes. No orders are processed through this site.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;