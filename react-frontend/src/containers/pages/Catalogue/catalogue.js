import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortByBox from "../../components/SortByBox/SortByBox";
import ItemCard from "../../components/ItemCard";
import useTheme from "../../../muiTheme/index.js";
import "./catalogue.css";
class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueData: Array(0),
      searchTerm: "",
    };
  }

  theme = useTheme();

  componentDidMount() {
    getCatalogueData().then((catalogueData) =>
      this.setState({ catalogueData: catalogueData })
    );
    console.log(this.state.catalogueData);
  }

  // Handle search bar input
  handleOnSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Handle sorting box input
  handleSortProducts = (target) => {
    if (target === "price-asc") {
      this.setState({
        catalogueData: this.state.catalogueData.sort(
          (a, b) => a.Price - b.Price
        ),
      });
    } else if (target === "price-desc") {
      this.setState({
        catalogueData: this.state.catalogueData.sort(
          (a, b) => b.Price - a.Price
        ),
      });
    } else {
      this.setState({
        catalogueData: this.state.catalogueData.sort((a, b) =>
          a.ProductName.localeCompare(b.ProductName)
        ),
      });
    }
  };

  render() {
    let catalogueData = this.state.catalogueData;
    let catalogueItems = catalogueData
      .filter((val) => {
        if (this.state.searchTerm === "") {
          return val;
        } else if (
          val.ProductName.toLowerCase().includes(
            this.state.searchTerm.toLowerCase()
          )
        ) {
          return val;
        }
        // No need for this 'return null', just to get rid of the warning
        return null;
      })
      .map((itemData) => {
        return (
          <Grid key={`productId-${itemData.ProductId}`} item xs={3}>
            <ItemCard
              id={itemData.ProductId}
              height="350"
              itemData={itemData}
              handleAddToCart={this.props.handleAddToCart}
              // handleCheckout={this.handleCheckout}
            />
          </Grid>
        );
      });

    return (
      <div style={{ padding: "5%" }}>
        <div className="catalogue-header">
          {/* Header */}
          <Typography variant="h2">Catalogue</Typography>

          <div className="search-sort-wrapper">
            {/* Searching Bar */}
            <SearchBar onChange={this.handleOnSearch} />
            {/* SortBy Box */}
            <SortByBox onSort={this.handleSortProducts} />
          </div>
        </div>

        {/* Catalogue Items */}
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
