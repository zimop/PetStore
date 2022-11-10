import { useState, useEffect } from "react";
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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import Alert from "@mui/material/Alert";

import "./itemPage.css";
import ReviewCard from "./threeTabs/reviewCard/reviewCard.js";
import RecommendationCard from "./threeTabs/recommendationCard/recommendationCard.js";
import ItemDescription from "./threeTabs/itemDescription/itemDescription.js";
import ProductImagesSwiper from "../../components/imageSwipeBox";
import { useParams } from "react-router-dom";

const ItemPage = ({ handleAddToCart }) => {
  const theme = useTheme();
  const [productData, setProductData] = useState({ images: Array(0) });
  const [value, setValue] = useState("0");
  const [addQty, setAddQty] = useState(1);
  const [accumulatedQty, setAccumulatedQty] = useState(0);
  const [inStock, setInStock] = useState("init");
  const params = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectQty = (event) => {
    setAddQty(event.target.value);
  };

  const handleOnClickAddToCart = () => {
    const newAccumulatedQty = accumulatedQty + addQty;
    if (productData.Stock < newAccumulatedQty) {
      setInStock("outStock");
    } else {
      handleAddToCart(productData, addQty);
      setInStock("added");
      setAccumulatedQty(newAccumulatedQty);
    }
  };

  // Hook to get product data
  useEffect(() => {
    getProductData(params.productId).then((productData) =>
      setProductData(productData)
    );
  }, [params.productId]);

  return (
    <ThemeProvider theme={theme}>
      {/* Background */}
      <div className="itemPage">
        {/* Breadcrumbs pages navigation */}
        <div>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ ml: 6, my: 4, alignItems: "left" }}
          >
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href={"/catalogue/get-" + productData.ProductType + "-products"}
            >
              <ListIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Catalogue
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <WbIncandescentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Product
            </Typography>
          </Breadcrumbs>
        </div>

        {/* Check the stock and render  */}
        {inStock === "outStock" ? (
          <Alert severity="error">
            Item "{productData.ProductName}" out of stock, please try again
            later!
          </Alert>
        ) : inStock === "added" ? (
          <Alert severity="success">
            Item "{productData.ProductName}" added to cart successfully!
          </Alert>
        ) : (
          <></>
        )}

        {/* ItemPage header*/}
        <div className="itemPage-header">
          <div className="product-image">
            <ProductImagesSwiper
              width={400}
              height={400}
              images={productData.images.map((element) => {
                return { Image: element.ImageURL };
              })}
            />
          </div>

          <div className="productDetails-header">
            <Typography variant="h3">{productData.ProductName}</Typography>

            {/* Middle area: Ratings and Price */}
            <div className="productDetails-middle">
              <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              <Typography variant="h4">${productData.Price}</Typography>
            </div>

            {/* Bottom area: Quantity and AddtoCart */}
            <div className="addToCart-group">
              {/* quantity select button */}
              <Select
                defaultValue={1}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleSelectQty}
              >
                {/*  ES6 syntax for loop in React JSX  */}
                {[...Array(9)].map((x, i) => (
                  // i+1 means the quantity starts from 1
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
              </Select>
              {/* AddtoCart Button */}
              <Button
                variant="contained"
                sx={{ size: "small" }}
                onClick={handleOnClickAddToCart}
              >
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
              <ItemDescription text={productData.Description} />
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
  let response = await fetch(`/api/get-product/${ProductId}`);
  let data = await response.json();
  return data;
};

export default ItemPage;
