import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

import "./index.css";

export default function ProductPageFooter() {
  return (
    <Box
      className="productPage-footer"
      sx={{ backgroundColor: "primary.main" }}
      paddingBottom={6}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} margin-bottom={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Shop</Box>
            <Box>
              <Link href="/login" color="footerText.main">
                Customer Login
              </Link>
            </Box>

            <Box>
              <Link href="/signup" color="footerText.main">
                Customer SignUp
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}> Information </Box>

            <Box>
              <Link href="/info/about-us" color="footerText.main">
                About Us
              </Link>
            </Box>

            <Box>
              <Link href="/info/about-us" color="footerText.main">
                Contact Us
              </Link>
            </Box>

            <Box>
              <Link href="/info/click-collect" color="footerText.main">
                Click and Collect
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Services</Box>
            <Box>
              <Link href="/info/delivery" color="footerText.main">
                Delivery
              </Link>
            </Box>

            <Box>
              <Link href="/managerBrowseProduct" color="footerText.main">
                Manager Login
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
