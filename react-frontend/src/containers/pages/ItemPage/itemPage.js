import "./itemPage.css";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import useState from "react";

const ProductPage = (props) => {
  //   const { children = <></> } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <div className="itemPage">
        {/* ItemPage header*/}
        <div className="itemPage-header">
          <div className="product-image">
            <img src="https://picsum.photos/200/300" alt="product" />
          </div>

          <div className="productDetails-header">
            <h2>Supercoat Chicken Large Breed Adult Dog Food 18KG</h2>

            {/* Middle area: Ratings and Price */}
            <div className="productDetails-middle">
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <h3>$49.99</h3>
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
                  //   onChange={this.handleChange}
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
              <p>
                Used and recommended by Dr Harry Copper. Veterinarian SMARTBLEND
                . Precise nutrition for whole body health. It takes a precise
                combination of nutrients to keep your dog in top condition.
                Which is why the experts at Purina have developed SMARTBLEND (R)
                . Inspired by nature and blended with scientific precision,
                SMARTBLEND is specifically designed to promote your dogs whole
                body health. *Compared to previous SUPERCOAT Adult Large Breed
                Formula.
              </p>
              <p>
                Used and recommended by Dr Harry Copper. Veterinarian SMARTBLEND
                . Precise nutrition for whole body health. It takes a precise
                combination of nutrients to keep your dog in top condition.
                Which is why the experts at Purina have developed SMARTBLEND (R)
                . Inspired by nature and blended with scientific precision,
                SMARTBLEND is specifically designed to promote your dogs whole
                body health. *Compared to previous SUPERCOAT Adult Large Breed
                Formula.
              </p>
            </TabPanel>
            {/* Reviews Tab */}
            <TabPanel value="1">Item Two Reviews</TabPanel>

            {/* Recommendations Tab */}
            <TabPanel value="2">Item Three Recommendations</TabPanel>
          </TabContext>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
