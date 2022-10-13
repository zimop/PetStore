import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./orderSummary.css";

const OrderSummary = (props) => {
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <div>
          <div className="text-align">
            <Typography variant="h4" component="div">
              Subtotal:
            </Typography>
            <Typography variant="h4" component="div">
              $999
            </Typography>
          </div>
          <div className="text-align">
            <Typography variant="h4" component="div">
              Standard Shipping:
            </Typography>
            <Typography variant="h4" component="div">
              $90
            </Typography>
          </div>
          <div className="total">
            <Typography variant="h4">Total:</Typography>
            <Typography variant="h4">$2999</Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
