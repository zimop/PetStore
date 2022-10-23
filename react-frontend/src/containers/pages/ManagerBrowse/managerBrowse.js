import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import ProductRow from "../../components/productRow";

const ManagerBrowse = ({ props }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <ProductRow
        productName="Supercoat Chicken Large Breed Adult Dog Food 18kg"
        stock="6"
      ></ProductRow>
      <ProductRow></ProductRow>
    </ThemeProvider>
  );
};

export default ManagerBrowse;
