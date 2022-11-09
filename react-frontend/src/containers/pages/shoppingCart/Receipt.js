import * as React from "react";
import { Card, CardContent } from "@mui/material";
import "./receipt.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const Receipt = (props) => {
  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    let itemsPrice = props.cartItems.reduce(
      (a, c) => a + c.item.Price * c.qty,
      0
    );
    setTotal(itemsPrice);
    setShippingPrice(
      itemsPrice > 79 || props.pickup || itemsPrice === 0
        ? 0
        : itemsPrice * 0.08
    );
    setTax(itemsPrice * 0.1);
  }, [props.cartItems, props.pickup]);
  return (
    <div className="box">
      <Card sx={{ minWidth: 600, border: 1, borderRadius: "16px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
            Thanks for buying with us!
          </Typography>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            Here is your Receipt:
          </Typography>
          {props.cartItems.map((val) => {
            return (
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 25 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Product Name: {val.item.ProductName}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 25 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Quantity: {val.qty}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 25 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Product Price: {val.item.Price}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            Total: {(total + shippingPrice + tax).toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="outlined"
        size="large"
        sx={{ width: 620, height: 50 }}
        href={"/home"}
      >
        Back to home
      </Button>
    </div>
  );
};

export default Receipt;
