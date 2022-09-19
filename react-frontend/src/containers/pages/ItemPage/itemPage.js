import * as React from "react";

import useTheme from "../../../muiTheme";
import { ThemeProvider } from "@emotion/react";

import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
// import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";

import "./itemPage.css";
import ReviewCard from "./threeTabs/reviewCard/reviewCard.js";
import RecommendationCard from "./threeTabs/recommendationCard/recommendationCard.js";
import ItemDescription from "./threeTabs/itemDescription/itemDescription.js";
import ProductImagesSwiper from "./imageSwipeBox";

const ProductPage = ({ ProductId }) => {
  const theme = useTheme();
  const [productData, setProductData] = React.useState({});
  const [value, setValue] = React.useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Hook to get product data
  React.useEffect(() => {
    getProductData().then((productData) => setProductData(productData));
  }, []);

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
              {/* {productData.ProductName} */}
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
              <tbody>
                <Select
                  defaultValue={1}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  {/*  ES6 syntax for loop in React JSX  */}
                  {[...Array(9)].map((x, i) => (
                    // i+1 means the quantity starts from 1
                    <MenuItem value={i + 1}>{i + 1}</MenuItem>
                  ))}
                </Select>
              </tbody>

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

const getProductData = async (ProductId) => {
  let response = await fetch(`/api/product/get-product/${ProductId}`);
  let data = await response.json();
  return data;
};

export default ProductPage;
