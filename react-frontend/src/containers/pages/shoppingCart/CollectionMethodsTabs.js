import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaceIcon from "@mui/icons-material/Place";

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

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
            <Tab icon={<LocalShippingIcon />} label="Delivery" value="0" />
            <Tab icon={<PlaceIcon />} label="Pickup in Store" value="1" />
          </Tabs>
        </Box>
        <TabPanel value="0">
          <p>testing 0</p>
        </TabPanel>
        <TabPanel value="1">
          <p>testing 1</p>
        </TabPanel>
      </TabContext>
    </Card>
  );
}
