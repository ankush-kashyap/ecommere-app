import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
function ProductCard({ id,
    image,
    title,
    price,
    rating,
    addToCart,
    toggleWishlist,
    isWishlisted, }) {
    return (
        <div className="product-card">
            {/* Product Image */}
            <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="product-image" />
            </Link>
            {/* Product Details */}
            <div className="product-info">
                <Link to={`/product/${id}`}>
                    <h3>{title}</h3>
                    <div className="product-PR">
                        <p className="product-price">${price}</p>
                        <p className="product-rating">⭐ {rating}</p>
                    </div>
                </Link>

                <button
                    className="wishlist-btn"
                    onClick={toggleWishlist}
                >
                    {isWishlisted ? (
                        <FaHeart color="red" />
                    ) : (
                        <FaRegHeart />
                    )}
                </button>


                {/* Add to Cart Button */}
                <button className="addtocart" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
export default ProductCard;