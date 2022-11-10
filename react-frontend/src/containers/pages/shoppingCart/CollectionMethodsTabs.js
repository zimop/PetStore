import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaceIcon from "@mui/icons-material/Place";
import Typography from "@mui/material/Typography";

export default function CollectionMethodsTabs({ handlePickup }) {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: 500 }}>
      <TabContext value={value}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
            variant="fullWidth"
            centered
            scrollButtons="auto"
          >
            <Tab
              icon={<LocalShippingIcon />}
              label="Delivery"
              value="0"
              onClick={() => handlePickup(false)}
            />
            <Tab
              icon={<PlaceIcon />}
              label="Pickup in Store"
              value="1"
              onClick={() => handlePickup(true)}
            />
          </Tabs>
        </Box>

        <TabPanel value="0">
          <CardContent align="left">
            <Typography variant="h6" align="left" sx={{ fontWeight: "bold" }}>
              We keep you informed
            </Typography>

            <Typography variant="body" align="left">
              Once you’ve placed an order, you will receive an order email to
              confirm your order details, including shipping and delivery
              estimates for each item. Once your item has prepared for shipment
              and ships, you will receive a Shipment Notification email with
              carrier and tracking information.
            </Typography>

            <Typography variant="body" align="left" display="block">
              You can also visit online <a href="/home">Purchase history</a> to
              view the most up-to-date status of your order.
            </Typography>
          </CardContent>
        </TabPanel>
        <TabPanel value="1">
          {/* <StoreMap /> */}
          <Card>
            <CardMedia
              src="https://storage.googleapis.com/maps-solutions-7dbd20gwa3/locator-plus/e9ic/locator-plus.html"
              component="iframe"
              height="600"
              width="100%"
            />
          </Card>
        </TabPanel>
      </TabContext>
    </Card>
  );
}
