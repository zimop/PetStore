import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import CheckoutPage from "./containers/pages/checkout/checkoutPage";
import ShoppingCart from "./containers/components/ShoppingCart/ShoppingCart";

import ClickCollectPage from "./containers/pages/homePage/staticPage/clickCollectPage";
import DeliveryPage from "./containers/pages/homePage/staticPage/deliveryPage";
import AboutUsPage from "./containers/pages/homePage/staticPage/aboutUsPage";

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = cartItems.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item }
        );
      }
      return [...prev, { ...clickedItem, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (clickedItem) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === clickedItem.id) {
          if (item.qty === 1) return acc;
          return [...acc, { ...item, qty: item.qty - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  //const  getTotalItems = (cartItems) => {
  //   return cartItems.reduce((a, c) => a + c.qty, 0);
  // };

  return (
    <BrowserRouter>
      <AppLayout cartItems={cartItems}>
        <div className="App">
          <Routes>
            {/* Static Pages */}
            <Route path="info/click-collect" element={<ClickCollectPage />} />
            <Route path="/info/delivery" element={<DeliveryPage />} />
            <Route path="/info/about-us" element={<AboutUsPage />} />

            <Route path="/product/:productId" element={<ItemPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/shoppingCart"
              element={
                <ShoppingCart
                  cartItems={cartItems}
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart}
                />
              }
            />
          </Routes>

          {/* Loading Animation */}
          {loading ? (
            <img
              src={require("./containers/pages/homePage/staticPage/animations/30206-loading.gif")}
              style={{
                width: "30%",
                height: "100%",
                border: 0,
                display: "flex",
                margin: "auto",
                marginTop: "10%",
                marginBottom: "10%",
              }}
              alt="Walking Elephant, loading Gif"
            />
          ) : (
            // Rest of the Routes
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/catalogue"
                element={
                  <Catalogue
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
