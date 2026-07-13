import "./checkout.css";
import { useState } from "react";


function Checkout({ cartItems }) {

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });


  const [addressType, setAddressType] = useState("Home");


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-page">

      <div className="checkout-left">

        <h1>Checkout</h1>

        {cartItems.length === 0 ? (
          <h2>Your cart is empty.</h2>
        ) : (
          cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="checkout-details">

                <h3>{item.title}</h3>

                <p className="price">
                  ${item.price}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

              </div>

            </div>
          ))
        )}

        <div className="demo-notice">
          ⚠️ Demo Project: Do not enter real personal or payment information.
        </div>
        <div className="address-box">

          <h2>Delivery Address</h2>

          <input type="text"
            placeholder="Full name"
            value={address.name}
            onChange={(e) =>
              setAddress({ ...address, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) =>
              setAddress({ ...address, phone: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Email"
            value={address.email}
            onChange={(e) =>
              setAddress({ ...address, email: e.target.value })
            }
          />

          <textarea
            placeholder="Address"
            value={address.address}
            onChange={(e) =>
              setAddress({ ...address, address: e.target.value })
            }
          />

          <div className="address-row">

            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) =>
                setAddress({ ...address, city: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) =>
                setAddress({ ...address, state: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="PIN Code"
              value={address.pincode}
              onChange={(e) =>
                setAddress({
                  ...address,
                  pincode: e.target.value,
                })
              }
            />
          </div>

          <div className="address-type">
            <h3>Address Type</h3>

            <label>
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={addressType === "Home"}
                onChange={(e) => setAddressType(e.target.value)}
              />
              Home
            </label>

            <label>
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={addressType === "Work"}
                onChange={(e) => setAddressType(e.target.value)}
              />
              Work
            </label>
          </div>



        </div>




      </div>

      <div className="checkout-right">

        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Items</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <button className="payment-btn">
          Proceed to Payment
        </button>

      </div>

    </div>
  );
}

export default Checkout;