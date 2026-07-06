import { useState, useEffect } from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/footer";
import CartSidebar from "./components/CartSidebar";
import Checkout from "./components/Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99,
      rating: 4.5,
      category: "Electronics",
      image: "image-url",
    },
    {
      id: 2,
      title: "Running Shoes",
      price: 120,
      rating: 4.2,
      category: "Shoes",
      image: "image-url",
    },
    {
      id: 3,
      title: "T-Shirt",
      price: 30,
      rating: 4.0,
      category: "Fashion",
      image: "image-url",
    },
    {
      id: 4,
      title: "Shirt",
      price: 300,
      rating: 4.0,
      category: "Fashion",
      image: "image-url",
    },
  ];

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar
              cartItems={cartItems}
              setShowCart={setShowCart}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <Hero />

            <div className="filters">
              <button onClick={() => setSelectedCategory("All")}>
                All
              </button>

              <button onClick={() => setSelectedCategory("Electronics")}>
                Electronics
              </button>

              <button onClick={() => setSelectedCategory("Fashion")}>
                Fashion
              </button>

              <button onClick={() => setSelectedCategory("Shoes")}>
                Shoes
              </button>
            </div>

            <div className="products">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  addToCart={() => addToCart(product)}
                />
              ))}
            </div>

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
        }
      />

      <Route
        path="/checkout"
        element={<Checkout cartItems={cartItems} />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails products={products} />}
      />
    </Routes>
  );
}

export default App;
