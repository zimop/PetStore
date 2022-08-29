import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import "./itemPage.css";

const ProductPage = (props) => {
  //   const { children = <></> } = props;
  const theme = useTheme();

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
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
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
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
