import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ItemCard from "../../components/ItemCard";

class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueData: Array(0),
    };
  }

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
            handleAddToCart={this.props.handleAddToCart}
            // handleRemoveFromCart={() => props.handleRemoveFromCart(itemData)}
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

export default Catalogue;
