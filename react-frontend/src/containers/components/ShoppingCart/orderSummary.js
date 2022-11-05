import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useState, useEffect } from "react";

import "./orderSummary.css";

const OrderSummary = ({ cartItems, pickup }) => {
  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let itemsPrice = cartItems.reduce((a, c) => a + c.Price * c.qty, 0);
    setTotal(itemsPrice);
    setShippingPrice(
      itemsPrice > 100 || pickup || itemsPrice === 0 ? 0 : itemsPrice * 0.07
    );
    setTax(itemsPrice * 0.1);
  }, [cartItems, pickup]);

  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <div>
          <div className="text-align">
            <Typography variant="h6" component="div">
              Subtotal:
            </Typography>
            <Typography variant="h6" component="div">
              ${total.toFixed(2)}
            </Typography>
          </div>
          <div className="text-align">
            {pickup === true ? (
              <div>
                <Typography variant="h6" component="div">
                  Pickup in Store:
                </Typography>
              </div>
            ) : (
              <Typography variant="h6" component="div">
                Standard Shipping (7%):
              </Typography>
            )}
            <Typography variant="h6" component="div">
              ${shippingPrice.toFixed(2)}
            </Typography>
          </div>
          <div className="text-align">
            <Typography variant="h6" component="div">
              GST:
            </Typography>
            <Typography variant="h6" component="div">
              ${tax.toFixed(2)}
            </Typography>
          </div>
          <div className="total">
            <Typography variant="h6">Total:</Typography>
            <Typography variant="h6">
              ${(total + shippingPrice + tax).toFixed(2)}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
