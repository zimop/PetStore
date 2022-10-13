import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import ProductRow from "../../components/productRow";

const ManagerBrowse = ({ props }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <ProductRow></ProductRow>
      <ProductRow></ProductRow>
    </ThemeProvider>
  );
};

export default ManagerBrowse;
