import "./CartSidebar.css";
import { Link } from "react-router-dom";
function CartSidebar({ cartItems, setShowCart, increaseQuantity,
    decreaseQuantity,
    removeItem,
}) {
    // calculating total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <aside className="cart-sidebar">

            <div className="cart-heading">

                <h2>Your Cart</h2>
                <button onClick={() => setShowCart(false)}>
                    Close
                </button>

            </div>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">

                        <img
                            src={item.image}
                            alt={item.title}
                            className="cart-item-image"
                        />

                        <div className="cart-item-details">

                            <h4>{item.title}</h4>

                            <p className="cart-price">
                                ${item.price}
                            </p>

                            <div className="quantity-box">

                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    −
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    +
                                </button>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeItem(item.id)}
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))}
            </div>

            <div className="cart-total">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <Link to="/checkout">
                    <button>Go to Checkout</button>
                </Link>
            </div>
        </aside >
    );
}

export default CartSidebar;
