// Click Collect Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddTaskIcon from "@mui/icons-material/AddTask";

import "./clickCollectPage.css";

const ClickCollectPage = (props) => {
  return (
    <div className="clickCollectBackground">
      <div className="clickCollect-cards">
        <Card sx={{ width: 550, height: 250, mt: 20, mb: 5, mx: "auto" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={"bold"}
              component="div"
            >
              How Click & Collect works?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"5%"}
            >
              <AttachFileIcon sx={{ mr: 1 }} />
              Shop online and find a product.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"5%"}
            >
              <AttachFileIcon sx={{ mr: 1 }} />
              Select the product and check it is available for pick up in-store.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"5%"}
            >
              <AttachFileIcon sx={{ mr: 1 }} />
              Check stock availability in your local store.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"5%"}
            >
              <AttachFileIcon sx={{ mr: 1 }} />
              Add the product to your shopping cart and checkout
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 550, height: 250, mt: 20, mb: 5, mx: 3 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={"bold"}
              component="div"
            >
              E-mail confirmation & pick up
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"4%"}
            >
              <AddTaskIcon sx={{ mr: 1 }} />
              We’ll send an email when your order is ready for collection.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"4%"}
            >
              <AddTaskIcon sx={{ mr: 1 }} />
              Remember to bring your order confirmation, in either printed or
              digital form, as well as personal valid identification
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign={"left"}
              marginLeft={"4%"}
            >
              <AddTaskIcon sx={{ mr: 1 }} />
              In-store please proceed to the check-out counter where a staff
              member will process your order.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <img
          src={require("./animations/90163-cat-walking.gif")}
          style={{
            width: "35%",
            height: "100%",
            border: 0,
            alt: "catWalkingGif",
          }}
        />
      </div>
    </div>
  );
};

export default ClickCollectPage;
