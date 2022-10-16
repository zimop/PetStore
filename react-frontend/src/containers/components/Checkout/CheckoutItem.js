import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { useState } from "react";

import "./checkout.css";

const CheckoutItem = ({ item, addToCart, removeFromCart }) => {
  // const [quantity, setQuantity] = useState(item.qty);

  return (
    <Grid item xs={3}>
      <Card variant="undefined">
        <div className="picture">
          <CardMedia
            component="img"
            height={300}
            image={item.ProductImage}
            alt="Food"
            sx={{ objectFit: "contain", width: 450 }}
            className="productImage"
          />
        </div>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h6">
              {/* Food */}
              {item.ProductName}
            </Typography>
          </div>
          <div className="productDetails-middle">
            <div>
              {/* <Typography variant="h4">$99.99</Typography> */}
              <Typography variant="h4">${item.ProductPrice}</Typography>
            </div>
            <div className="toggleQuantity">
              <TextField
                id="outlined-basic"
                // value={quantity}
                value={item.qty}
                variant="outlined"
                sx={{ width: 55 }}
              />
              <ToggleButtonGroup orientation="horizontal">
                <ToggleButton
                  value="less"
                  aria-label="less"
                  onClick={
                    // quantity < 2 ? null : () => setQuantity(quantity - 1)
                    () => removeFromCart(item)
                  }
                >
                  <RemoveIcon />
                </ToggleButton>
                <ToggleButton
                  value="more"
                  aria-label="more"
                  onClick={
                    // quantity > 9 ? null : () => setQuantity(quantity + 1)
                    () => addToCart(item)
                  }
                >
                  <AddIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CheckoutItem;
