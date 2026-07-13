import { useState, useEffect } from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/footer";
import CartSidebar from "./components/CartSidebar";
import Checkout from "./components/checkout";
import PrivateRoute from "./components/PrivateRoute";
import Wishlist from "./components/wishlist";
import wirelessHeadphones from "./assets/wireless-headphones.jpg";
import runningShoe from "./assets/running-shoe.jpg";
import shirt from "./assets/shirt.jpg";
import tShirt from "./assets/t-shirt.jpg";
import products from "/public/products.json";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cartItems, setCartItems] = useState(() => {
    const saveCart = localStorage.getItem("cartItems");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 },
      ]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const toggleWishlist = (product) => {
    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {
      setWishlist(
        wishlist.filter((item) => item.id !== product.id)
      );
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <>
      <Navbar
        user={user}
        cartItems={cartItems}
        wishlist={wishlist}
        setShowCart={setShowCart}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />

              <div className="products">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rating={product.rating.rate}
                    addToCart={() => addToCart(product)}
                    toggleWishlist={() => toggleWishlist(product)}
                    isWishlisted={wishlist.some(
                      (item) => item.id === product.id
                    )}
                  />
                ))}
              </div>
            </>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              products={products}
              addToCart={addToCart}
              cartItems={cartItems}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
            />
          }
        />


        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route  path="/privacy"  element={<Privacy />} />

      </Routes>

      {showCart && (
        <CartSidebar
          cartItems={cartItems}
          setShowCart={setShowCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      )}

      <Footer />

    </>
  );
}

export default App;

