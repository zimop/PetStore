// Click Collect Page

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ClickCollectPage = (props) => {
  return (
    <div classname="clickCollectBackground">
      <Card sx={{ maxWidth: 800, my: 20, mx: "auto" }}>
        <CardContent>
          <p>First card</p>
          {/* Flex box */}
          {/* https://www.petbarn.com.au/click-and-collect */}
          {/* https://lottiefiles.com/978-walking-deer ???*/}
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 800, my: 20, mx: "auto" }}>
        <CardContent>
          <p>Second card</p>
          {/* Flex box */}
          {/* https://www.petbarn.com.au/click-and-collect */}
          {/* https://lottiefiles.com/978-walking-deer ???*/}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClickCollectPage;
