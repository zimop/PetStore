import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SearchBar from "../../components/SearchBar/SearchBar";
import ItemCard from "../../components/ItemCard";

import "./catalogue.css";
class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueData: Array(0),
      searchTerm: "",
    };
  }

  componentDidMount() {
    getCatalogueData().then((catalogueData) =>
      this.setState({ catalogueData: catalogueData })
    );
    console.log(this.state.catalogueData);
  }

  handleOnSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
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
        // No need for this 'return null', just get rid of the warning
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
              // handleRemoveFromCart={() => props.handleRemoveFromCart(itemData)}
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
            {/* Search Bar */}
            <SearchBar onChange={this.handleOnSearch} />

            <div>
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Sort
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  // onChange={handleChange}
                  autoWidth
                  label="Sort"
                >
                  <MenuItem value="">
                    <em>Default</em>
                  </MenuItem>
                  <MenuItem value={0}>Price Ascending</MenuItem>
                  <MenuItem value={1}>Price Descending</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

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
