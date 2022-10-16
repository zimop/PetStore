import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CartItem from "./CartItem";
import { Typography, Button } from "@mui/material";

import "./shoppingCart.css";

const ShoppingCart = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <React.Fragment>
      <Typography variant="h3">Your Cart</Typography>
      <div className="cartItems">
        {cartItems.length === 0 ? (
          <Typography variant="h4">Your cart is empty</Typography>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={() => addToCart(item)}
              removeFromCart={() => removeFromCart(item)}
            />
          ))
        )}
      </div>

      <div className="checkout">
        <div className="cartTotal">
          <Typography variant="h4">
            Total: ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </Typography>
        </div>

        <div className="cartButtons">
          <Link to="/checkout">
            <Button variant="contained" color="primary">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
