import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
// import useState from "react";
// import { styled, alpha } from "@mui/material/styles";
// import InputLabel from "mui/material/InputLabel";
// import PropTypes from "@mui/material";

import "./itemPage.css";
import ReviewCard from "./threeTabs/reviewCard/reviewCard.js";
import RecommendationCard from "./threeTabs/recommendationCard/recommendationCard.js";
import ItemDescription from "./threeTabs/itemDescription/itemDescription.js";
import ProductImagesSwiper from "./imageSwipeBox";

const ProductPage = (props) => {
  //   const { children = <></> } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <div className="itemPage">
        {/* ItemPage header*/}
        <div className="itemPage-header">
          <div className="product-image">
            <ProductImagesSwiper />
          </div>

          <div className="productDetails-header">
            <Typography variant="h3">
              Supercoat Chicken Large Breed Adult Dog Food 18KG
            </Typography>

            {/* Middle area: Ratings and Price */}
            <div className="productDetails-middle">
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <Typography variant="h4">$49.99</Typography>
            </div>

            {/* Bottom area: Quantity and AddtoCart */}
            <div className="addToCart-group">
              {/* quantity select button */}
              <FormControl sx={{ size: "small" }}>
                {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue={1}
                  //   // value={quantity}
                  //   label="quantity"
                  // onChange={this.handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                </Select>
              </FormControl>

              {/* AddtoCart Button */}
              <Button variant="contained" sx={{ size: "small" }}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* ItemPage Product Tabs */}
        <div className="itemPage-threeTabs">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
                centered
              >
                <Tab label="Product Details" value="0" />
                <Tab label="Reviews (4 Reviews)" value="1" />
                <Tab label="Recommendations" value="2" />
              </Tabs>
            </Box>

            {/* Product Desctiption Tab */}
            <TabPanel value="0">
              <ItemDescription />
            </TabPanel>

            {/* Reviews Tab */}
            <TabPanel value="1">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </TabPanel>

            {/* Recommendations Tab */}
            <TabPanel value="2">
              <RecommendationCard />
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
