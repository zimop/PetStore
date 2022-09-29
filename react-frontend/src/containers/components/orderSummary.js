import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OrderSummary = () => {
  return (
    <Card sx={{ width : 500 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Subtotal:$999
        </Typography>
        <Typography variant="h4" component="div">
          Standard Shipping: $20
        </Typography>
        <Typography variant="h3">
          <p>Total: $2999</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;