import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia } from "@mui/material";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import "./cartItem.css";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  let image = item.images[0] ? item.images[0].ImageURL : null;
  return (
    <Grid item xs={3}>
      <Card variant="undefined">
        <div className="picture">
          <CardMedia
            component="img"
            height={300}
            image={image}
            alt="Food"
            sx={{ objectFit: "contain", width: 450 }}
            className="productImage"
          />
        </div>
        <CardContent>
          <div>
            <Typography gutterBottom variant="h6">
              {item.ProductName}
            </Typography>
          </div>
          <div className="productDetails-middle">
            <div>
              <Typography variant="h5" sx={{ ml: 5 }}>
                ${item.Price.toFixed(2)}
              </Typography>
            </div>
            <div className="toggleQuantity">
              <TextField
                id="outlined-basic"
                value={item.qty}
                variant="outlined"
                sx={{ width: 55 }}
              />
              <ToggleButtonGroup orientation="horizontal">
                <ToggleButton
                  value="less"
                  aria-label="less"
                  onClick={() => removeFromCart(item)}
                >
                  <RemoveIcon />
                </ToggleButton>
                <ToggleButton
                  value="more"
                  aria-label="more"
                  onClick={() => addToCart(item, 1)}
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

export default CartItem;
