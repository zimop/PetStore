import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import useTheme from "../../muiTheme/index";

import resetToken from "../../resetToken";

//let Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function PrimarySearchAppBar({
  hasToken,
  isManager,
  cartItems,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [cartIsOpen, setCartStatus] = React.useState(null);
  useTheme();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isCartOpen = Boolean(cartIsOpen);

  const theme = useTheme();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCartCheckoutOpen = (event) => {
    setCartStatus(event.currentTarget);
  };

  const handleCartCheckoutClose = () => {
    setCartStatus(null);
  };

  const openProfile = () => {
    window.location = "/profile";
  };

  const logOut = () => {
    resetToken();
    handleMenuClose();
    window.location.reload(false);
  };

  //dmnkenkdwnownowmnomwoowm
  const [state, setState] = React.useState();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 300, auto: 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          key="Home"
          onClick={() => (window.location = "/home")}
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key="Catalogue"
          onClick={() => (window.location = "/catalogue/get-all-products")}
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary={"Catalogue"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key="Shopping Cart"
          onClick={() => (window.location = "/shopping-cart")}
          disablePadding
        >
          <ListItemButton>
            <ListItemText primary={"Shopping Cart"} />
          </ListItemButton>
        </ListItem>
        {hasToken && (
          <ListItem key="Sign Out" onClick={logOut} disablePadding>
            <ListItemButton>
              <ListItemText primary={"Sign Out"} />
            </ListItemButton>
          </ListItem>
        )}
        {!hasToken && (
          <ListItem
            key="Login"
            onClick={() => (window.location = "/login")}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      {Boolean(isManager) && <Divider />}
      {Boolean(isManager) && (
        <List>
          <ListItem
            key="Add Product"
            onClick={() => (window.location = "/addProduct")}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={"Add Product"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key="Edit/Browse Products"
            onClick={() => (window.location = "/managerBrowseProduct")}
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary={"Edit/Browse Products"} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  //Dont understand primary-search-account-menu
  const checkoutID = "primary-search-account-menu";
  const renderCheckout = (
    <Menu
      anchorEl={cartIsOpen}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={checkoutID}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isCartOpen}
      onClose={handleCartCheckoutClose}
    >
      <Link
        to="/shopping-cart"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <MenuItem onClick={handleCartCheckoutClose}>View Cart</MenuItem>
      </Link>
    </Menu>
  );

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={openProfile}>Profile</MenuItem>
      <MenuItem onClick={logOut}>Log out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <React.Fragment>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={state} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </React.Fragment>

          <a href={"/home"} style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  color: theme.palette.navigationHeader.text,
                },
              }}
            >
              PETSHOP
            </Typography>
          </a>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show added products"
              aria-controls={checkoutID}
              aria-haspopup="true"
              onClick={handleCartCheckoutOpen}
              color="inherit"
            >
              <Badge
                badgeContent={
                  cartItems.length
                    ? cartItems.reduce((a, c) => a + c.qty, 0)
                    : "0"
                }
                color="error"
              >
                {/* <ShoppingCart /> */}
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {hasToken && (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
            {!hasToken && (
              <Button
                variant="string"
                size="medium"
                onClick={() => (window.location = "/login")}
              >
                Login
              </Button>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderCheckout}
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
