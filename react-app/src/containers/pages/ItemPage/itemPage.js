import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import "./itemPage.css";

const ProductPage = (props) => {
  //   const { children = <></> } = props;
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="itemPage">
        <div className="itemPage-header">
          <div className="product-image">
            <img src="https://picsum.photos/200/300" alt="product" />
          </div>

          <div className="productDetails-header">
            <h2>
              Supercoat Chicken Large Breed Adult Dog Food 18KG
            </h2>

            <div className="productDetails-middle">
              <p>review stars</p>
              <p>Price: $100</p>
            </div>

            <div className="addToCart-group">
              <p>quantity</p>
              <p>add to cart ></p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
