import { Link } from "react-router-dom";
import "./OrderSuccess.css";
import { FaCheckCircle } from "react-icons/fa";

function OrderSuccess() {
  return (
    <div className="success-page">
      <div className="success-card">
        <FaCheckCircle className="success-icon" />

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for your purchase.
          Your order has been received and is being processed.
        </p>

        <h3>Estimated Delivery</h3>
        <span>3–5 Business Days</span>

        <Link to="/" className="continue-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;