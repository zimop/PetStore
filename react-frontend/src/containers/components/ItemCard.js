import Typography from "@mui/material/Typography";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

import "./ItemCard.css";
// import CheckoutPage from "../pages/shoppingCart/ShoppingCart";

const ItemCard = ({ itemData, handleAddToCart, height }) => {
  return (
    <Card>
      <CardActionArea href={`/product/${itemData.ProductId}`}>
        <CardMedia
          component="img"
          height={height}
          image={itemData.ProductImage}
          alt={itemData.ProductName}
          sx={{ objectFit: "contain" }}
          className="productImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {itemData.ProductName}
          </Typography>
          <Typography variant="h5">${itemData.Price.toFixed(2)}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="buttonContainer">
          <Button
            className="fullWidthButton"
            variant="outlined"
            size="large"
            onClick={() => handleAddToCart(itemData)}
          >
            Add to Cart
          </Button>

          <a href="/checkout" style={{ textDecoration: "none" }}>
            {/* Using Link will lead to test failure */}
            {/* <Link
            to="/checkout"
            style={{ color: "inherit", textDecoration: "none" }}
          > */}
            <Button
              className="fullWidthButton"
              variant="contained"
              size="large"
              onClick={() => handleAddToCart(itemData)}
            >
              Buy Now
            </Button>
          </a>
        </div>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
