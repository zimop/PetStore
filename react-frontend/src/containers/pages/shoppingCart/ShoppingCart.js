import { useState } from "react";
import * as React from "react";

import "./shoppingCart.css";
import Button from "@mui/material/Button";

import CartItem from "../../components/ShoppingCart/CartItem";
import OrderSummary from "../../components/ShoppingCart/OrderSummary";
import { Typography } from "@mui/material";

import CollectionMethodsTabs from "./CollectionMethodsTabs";

const ShoppingCart = ({ cartItems, addToCart, removeFromCart }) => {
  const [pickup, setPickup] = useState(false);

  const handlePickup = (pickup) => {
    setPickup(pickup);
  };

  return (
    <div className="all-items">
      {/* checkout page items display */}
      <div className="shopping-heading">
        <Typography variant="h4">Shopping Cart</Typography>
        <div className="moveBox">
          <div className="shopping-cart">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <Typography variant="h4">Your cart is empty</Typography>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
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
        <div className="collection-methods-wrapper">
          <Typography variant="h4">Collection Methods</Typography>
          <CollectionMethodsTabs handlePickup={handlePickup} />
        </div>

        <div className="order-summary">
          <Typography variant="h4">Order Summary</Typography>
          <OrderSummary cartItems={cartItems} pickup={pickup} />
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

export default ShoppingCart;
