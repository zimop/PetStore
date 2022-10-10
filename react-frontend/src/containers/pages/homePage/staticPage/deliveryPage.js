// 2 Hours Delivery Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// import deliveryGif from "/public/animations/90158-cat-book.gif";

const DeliveryPage = (props) => {
  return (
    <Card sx={{ maxWidth: 700, my: 20, mx: "auto" }}>
      <CardMedia>
        <img
          src={require("./animations/90158-cat-book.gif")}
          style={{
            width: "25%",
            height: "100%",
            border: 0,
            display: "flex",
            margin: "auto",
          }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Same Day Delivery (2hr delivery)
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Once we process your order, It will arrive in 2 hours the same day
          provided the order was made before 4pm Mon-Sat and 3pm Sun and public
          holidays, local time. You’ll be notified by email when your delivery
          is on its way.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Standard Delivery
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We offers a reliable and affordable delivery service to all metro and
          regional locations within Australia including Tasmania. At this time
          we do not deliver internationally. Standard orders will take between 2
          - 10 business days to arrive, depending on your destination and
          shipping method. Delivery times may be subject to stock availability
          and Public Holidays, as such receipt of orders may be extended by up
          to 21 days. We will notify you when your order has been dispatched.
          Please note that our couriers do not operate on weekends or public
          holidays. Please be prepared for slight delays to your delivery around
          Christmas, Easter and public holidays.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DeliveryPage;
