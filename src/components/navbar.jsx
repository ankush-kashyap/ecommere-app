import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import { FaHeart } from "react-icons/fa";

function Navbar({ user,
    cartItems,
    wishlist,
    setShowCart,
    searchTerm,
    setSearchTerm,
}) {

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </div>
            <div className="navbar-search">
                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </div>
            <div className="navbar-right">
                <Link to="/wishlist" className="navbar-wishlist">
                    <FaHeart className="wishlist-heart" />
                    {wishlist.length > 0 && (
                        <span className="wishlist-count">
                            {wishlist.length}
                        </span>
                    )}
                </Link>
            </div>
            <div className="navbar-cart" onClick={() => setShowCart(true)}>
                <FaShoppingCart />
                <span>Cart</span>
            </div>
        </nav>
    );
}
export default Navbar;