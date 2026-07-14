import ProductCard from "./ProductCard";
import "./wishlist.css"
function Wishlist({
  wishlist,
  addToCart,
  toggleWishlist,
}) {
  return (
    <div className="wishlist-page">
  <div className="wishlist-container">

    <h1 className="wishlist-title">
      Your Wishlist
    </h1>

    <p className="wishlist-subtitle">
      {wishlist.length} item{wishlist.length !== 1 && "s"} saved
    </p>

    {wishlist.length === 0 ? (
      <div className="empty-wishlist">
        <h2>Your Wishlist is Empty</h2>

        <p>
          Save your favorite products to purchase later.
        </p>
      </div>
    ) : (
      <div className="products">
        {wishlist.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            addToCart={() => addToCart(product)}
            toggleWishlist={() => toggleWishlist(product)}
            isWishlisted={true}
          />
        ))}
      </div>
    )}

  </div>
</div>
  );
}

export default Wishlist;