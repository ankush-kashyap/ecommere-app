import ProductCard from "./ProductCard";

function Wishlist({
  wishlist,
  addToCart,
  toggleWishlist,
}) {
  return (
    <div className="wishlist-page">

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
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
  );
}

export default Wishlist;