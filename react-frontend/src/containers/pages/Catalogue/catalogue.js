import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import SearchBar from "../../components/SearchBar/SearchBar";
import SortByBox from "../../components/SortByBox/SortByBox";
import ItemCard from "../../components/ItemCard";
import useTheme from "../../../muiTheme/index.js";
import "./catalogue.css";

import { useParams } from "react-router-dom";
// Can't use useParams in class component, so wrap it in a function component
function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

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
    getCatalogueData(this.props.params.api).then((catalogueData) =>
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
    } else if (target === "product-name-asc") {
      this.setState({
        catalogueData: this.state.catalogueData.sort((a, b) =>
          a.ProductName.localeCompare(b.ProductName)
        ),
      });
    } else if (target === "product-name-desc") {
      this.setState({
        catalogueData: this.state.catalogueData.sort((a, b) =>
          b.ProductName.localeCompare(a.ProductName)
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
        {/* Breadcrumbs pages navigation */}
        <div>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mb: 3, alignItems: "left" }}
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
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
            >
              <ListIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Catalogue
            </Typography>
          </Breadcrumbs>
        </div>

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

const getCatalogueData = async (api) => {
  let response = await fetch(`/api/${api}`);
  let data = await response.json();
  return data;
};

export default withParams(Catalogue);
