function Checkout({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

return (
    <div className="checkout">
      <h1>Checkout</h1>

      {cartItems.map((item) => (
        <div key={item.id} className="checkout-item">
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}

      <h2>Total: ${totalPrice}</h2>

      <button>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;