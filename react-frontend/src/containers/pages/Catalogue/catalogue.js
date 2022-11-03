import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

import ItemCard from "../../components/ItemCard";

import "./catalogue.css";

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
        <div className="catalogue-header">
          {/* Header */}
          <Typography variant="h1">Catalogue</Typography>

          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  border: "1px solid",
  borderColor: theme.palette.primary.main,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default Catalogue;
