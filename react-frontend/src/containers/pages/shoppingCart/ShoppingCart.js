import * as React from "react";
// import { Link } from "react-router-dom";

import "./shoppingCart.css";
import Button from "@mui/material/Button";

import CheckoutItem from "../../components/ShoppingCart/CartItem";
import OrderSummary from "../../components/ShoppingCart/orderSummary";
import { Typography } from "@mui/material";

const CheckoutPage = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <div className="all-items">
      {/* checkout page items display */}
      <div className="shopping-heading">
        <Typography variant="h3">Shopping Cart</Typography>
        <div className="moveBox">
          <div className="shopping-cart">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <Typography variant="h4">Your cart is empty</Typography>
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
        <Typography variant="h3">Order Summary</Typography>
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
