import { Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

function ProductDetails({
  products,
  addToCart,
  cartItems,
}) {
  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="product-page">

      <div className="product-container">

        {/* Left */}
        <div className="product-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Right */}
        <div className="product-info">

          <h1>{product.title}</h1>

          <div className="rating">
            ⭐ {product.rating.rate}
            <span> ({product.rating.count} ratings)</span>
          </div>

          <h2 className="price">
            ${product.price}
          </h2>

          <p className="stock">
            ✔ In Stock
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p className="description">
            {product.description}
          </p>

          <div className="buttons">

            <button className="cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>

            <button className="buy-btn"
              onClick={() => {
                const exists = cartItems.some(item => item.id === product.id);

                if (!exists) {
                  addToCart(product);
                }

                navigate("/checkout");
              }}>
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


export default ProductDetails;