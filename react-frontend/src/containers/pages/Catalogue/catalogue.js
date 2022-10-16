import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ItemCard from "../../components/ItemCard";

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueData: Array(0),
      cartItems: Array(0),
    };
  }

  handleAddToCart = (clickedItem) => {
    const isItemInCart = props.cartItems.find(
      (item) => item.id === clickedItem.id
    );
    if (isItemInCart) {
      props.cartItems.map((item) =>
        item.id === clickedItem.id
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
    } else {
      props.cartItems.push({ ...clickedItem, qty: 1 });
    }
  };

  handleRemoveFromCart = (clickedItem) => {
    const isItemInCart = props.cartItems.find(
      (item) => item.id === clickedItem.id
    );
    if (isItemInCart.qty === 1) {
      props.cartItems.filter((item) => item.id !== clickedItem.id);
    } else {
      props.cartItems.map((item) =>
        item.id === clickedItem.id
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );
    }
  };

  componentDidMount() {
    getCatalogueData().then((catalogueData) =>
      this.setState({ catalogueData: catalogueData })
    );
    console.log(this.state.catalogueData);
  }

  render() {
    let catalogueData = this.state.catalogueData;
    let catalogueItems = catalogueData.map((itemData) => {
      return (
        <Grid key={`productId-${itemData.ProductId}`} item xs={3}>
          <ItemCard
            id={itemData.ProductId}
            height="350"
            itemData={itemData}
            handleAddToCart={() => this.handleAddToCart(itemData)}
            handleRemoveFromCart={() => this.handleRemoveFromCart(itemData)}
            // handleCheckout={this.handleCheckout}
          />
        </Grid>
      );
    });
    return (
      <div style={{ padding: "5%" }}>
        <Typography variant="h1">Catalogue</Typography>
        <Grid container spacing={4}>
          {catalogueItems}
        </Grid>
      </div>
    );
  }
}

const getCatalogueData = async () => {
  let response = await fetch("/api/get-all-products");
  let data = await response.json();
  return data;
};

// const getTotalItems = (cartItems) => {
//   return cartItems.reduce((a, c) => a + c.qty, 0);
// };

export default Catalogue;
