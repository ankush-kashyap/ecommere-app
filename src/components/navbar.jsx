import { FaShoppingCart, FaUser } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "./Navbar.css";

function Navbar({ cartItems, setShowCart, searchTerm,
    setSearchTerm, }) {

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
                <div className="navbar-user">
                    <FaUser />
                    <span>Login</span>
                </div>
            </div>
            <div className="navbar-cart" onClick={() => setShowCart(true)}>
                <FaShoppingCart />
                <span>Cart</span>
            </div>
        </nav>
    );
}
export default Navbar;