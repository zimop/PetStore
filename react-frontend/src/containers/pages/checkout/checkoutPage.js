import * as React from "react";
// import { Link } from "react-router-dom";

import "./checkoutPage.css";
import Button from "@mui/material/Button";

import CheckoutItem from "../../components/Checkout/CheckoutItem";
import OrderSummary from "../../components/Checkout/orderSummary";
//import ToggleButton from "../../components/ToggleButton";

const CheckoutPage = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div className="all-items">
      {/* checkout page items display */}
      <div className="shopping-heading">
        <h1>Shopping Cart</h1>
        <div className="moveBox">
          <div className="shopping-cart">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <h2>Your cart is empty</h2>
              </div>
            ) : (
              cartItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* checkout page summary */}
      <div className="shopping-heading">
        <h1>Order Summary</h1>
        <div className="order-summary">
          <OrderSummary cartItems={cartItems} />
        </div>
        <div className="button">
          <Button
            variant="contained"
            size="large"
            sx={{ width: 500, height: 50 }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
