import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./containers/layout/index";
import ItemPage from "./containers/pages/ItemPage/itemPage";
import Catalogue from "./containers/pages/Catalogue/catalogue";
import HomePage from "./containers/pages/homePage/homePage";
import ManagerBrowse from "./containers/pages/ManagerBrowse/managerBrowse";
import AddEditProductPage from "./containers/pages/AddEditProduct/addEditProduct";
import LoginPage from "./containers/pages/Login/loginPage";
import SignUpPage from "./containers/pages/Login/signUpPage";
import ProfilePage from "./containers/pages/Profile/profilePage";
import ShoppingCart from "./containers/pages/shoppingCart/ShoppingCart";

import ClickCollectPage from "./containers/pages/homePage/staticPage/clickCollectPage";
import DeliveryPage from "./containers/pages/homePage/staticPage/deliveryPage";
import AboutUsPage from "./containers/pages/homePage/staticPage/aboutUsPage";

import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useToken from "./containers/components/useToken";
import resetToken from "./resetToken";
import { Typography } from "@mui/material";

function App() {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const { token, setToken } = useToken();
  useEffect(() => {
    async function validateToken(token) {
      if (token) {
        let response = await fetch("/api/validateToken", {
          method: "POST",
          body: JSON.stringify({ token: token.accessToken }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          let body = await response.json();
          if (!body.isValid) {
            resetToken();
          }
        }
      }
    }

    validateToken(token);
  }, [token]);

  const handleAddToCart = (clickedItem, addQty) => {
    setCartItems((prev) => {
      const isItemInCart = cartItems.find(
        (item) => item.ProductId === clickedItem.ProductId
      );
      if (isItemInCart) {
        return prev.map((item) =>
          item.ProductId === clickedItem.ProductId &&
          item.Stock >= item.qty + addQty
            ? { ...item, qty: item.qty + addQty }
            : { ...item }
        );
      }
      return [...prev, { ...clickedItem, qty: addQty }];
    });
  };

  const handleRemoveFromCart = (clickedItem) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.ProductId === clickedItem.ProductId) {
          if (item.qty === 1) return acc;
          return [...acc, { ...item, qty: item.qty - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <AppLayout
        cartItems={cartItems}
        hasToken={token != null}
        isManager={token != null && token.isManager}
      >
        <div className="App">
          <Routes>
            {/* Static Pages */}
            <Route path="/info/click-collect" element={<ClickCollectPage />} />
            <Route path="/info/delivery" element={<DeliveryPage />} />
            <Route path="/info/about-us" element={<AboutUsPage />} />
            <Route
              path="/login"
              element={<LoginPage token={token} setToken={setToken} />}
            />
            <Route
              path="/signup"
              element={<SignUpPage token={token} setToken={setToken} />}
            />
            <Route
              path="/product/:productId"
              element={<ItemPage handleAddToCart={handleAddToCart} />}
            />
            <Route
              path="/shopping-cart"
              element={
                <ShoppingCart
                  cartItems={cartItems}
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart}
                  clearCart={handleClearCart}
                  token={token}
                />
              }
            />
            <Route path="/profile" element={<ProfilePage token={token} />} />
            <Route
              path="/insufficient-access"
              element={
                <Typography variant="h1">Insufficient Access</Typography>
              }
            />
            <Route
              path="/addProduct"
              element={<AddEditProductPage token={token} />}
            />
            <Route
              path="/editProduct/:productId"
              element={<AddEditProductPage token={token} />}
            />
            <Route
              path="/managerBrowseProduct"
              element={<ManagerBrowse token={token} />}
            />
            <Route
              path="/catalogue/:api"
              element={
                <Catalogue
                  cartItems={cartItems}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
