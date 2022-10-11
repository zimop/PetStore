// Click Collect Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AddTaskIcon from "@mui/icons-material/AddTask";

import "./clickCollectPage";

const ClickCollectPage = (props) => {
  return (
    <div classname="clickCollectBackground">
      <Card sx={{ maxWidth: 800, mt: 20, mb: 5, mx: "auto" }}>
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
            marginLeft={"20%"}
          >
            <AttachFileIcon sx={{ mr: 1 }} />
            Shop online and find a product.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"left"}
            marginLeft={"20%"}
          >
            <AttachFileIcon sx={{ mr: 1 }} />
            Select the product and check it is available for pick up in-store.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"left"}
            marginLeft={"20%"}
          >
            <AttachFileIcon sx={{ mr: 1 }} />
            Check stock availability in your local store.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"left"}
            marginLeft={"20%"}
          >
            <AttachFileIcon sx={{ mr: 1 }} />
            Add the product to your shopping cart and checkout
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 800, my: 5, mx: "auto" }}>
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
            marginLeft={"8%"}
          >
            <AddTaskIcon sx={{ mr: 1 }} />
            We’ll send an email when your order is ready for collection.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"left"}
            marginLeft={"8%"}
          >
            <AddTaskIcon sx={{ mr: 1 }} />
            Remember to bring your order confirmation, in either printed or
            digital form, as well as personal valid identification
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"left"}
            marginLeft={"8%"}
          >
            <AddTaskIcon sx={{ mr: 1 }} />
            In-store please proceed to the check-out counter where a staff
            member will process your order.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClickCollectPage;
