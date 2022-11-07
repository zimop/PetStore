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
            <Box borderBottom={1}>Shop and Learn</Box>
            <Box>
              <Link herf="/" color="footerText.main">
                Promotions
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Customer Login
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Returns
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Services</Box>
            <Box>
              <Link herf="/" color="footerText.main">
                FQA
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Check Order Status
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Manager Login
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}> Information </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                About Us
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Contact Us
              </Link>
            </Box>

            <Box>
              <Link herf="/" color="footerText.main">
                Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
