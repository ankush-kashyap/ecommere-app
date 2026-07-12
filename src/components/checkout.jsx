import "./checkout.css";

function Checkout({ cartItems }) {
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