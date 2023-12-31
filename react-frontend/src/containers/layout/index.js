import { ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
// import { useHistory, useLocation } from "react-router-dom";

import PrimarySearchAppBar from "../navBar";
import ProductPageFooter from "../footer";

import useTheme from "../../muiTheme/index";

const AppLayout = (props) => {
  const { children = <></> } = props;
  const theme = useTheme();
  // const history = useHistory();
  // const pathName = useLocation().pathname;

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* nav bar */}
        <PrimarySearchAppBar
          cartItems={props.cartItems}
          hasToken={props.hasToken}
          isManager={props.isManager}
        />

        {/* body content of the page */}
        <div className="content">
          <main className="main-content">{children}</main>
        </div>

        {/* footer */}
        <ProductPageFooter />
      </ThemeProvider>
    </Fragment>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
