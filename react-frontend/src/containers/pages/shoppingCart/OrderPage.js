import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Typography,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import "./orderPage.css";

const OrderPage = (props) => {
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };
  if (props.token) {
    return <Navigate to="/profile" />;
  }
  return (
    // Adapted from https://github.com/mui/material-ui/blob/v5.10.8/docs/data/material/getting-started/templates/sign-in/SignIn.js
    // Licenced under MIT licence
    <div className="ordersContainer">
      <Typography variant="h5">Place an Order</Typography>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        sx={{ mt: 3, mb: 2 }}
        className="orderForm"
      >
        Return to Shopping Cart
      </Button>
      <form onSubmit={handleSubmit}>
        <FormControl className="orderForm">
          <TextField
            margin="normal"
            required
            fullWidth
            id="recipientName"
            name="recipientName"
            label="Recipient Name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="suburb"
            name="suburb"
            label="Suburb"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="state"
            name="state"
            label="State"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="postcode"
            name="postcode"
            label="Postcode"
            autoFocus
          />
          {error !== null && <p style={{ color: "red" }}>{error}</p>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Place Order
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default OrderPage;
