import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { sizing } from "@mui/system";

import useTheme from "../../muiTheme/index";
import { ThemeProvider } from "@emotion/react";

import "./index.css";

export default function ProductPageFooter() {
  return (
    <div>
      <Box className="productPage-footer">
        <AppBar>
          <Toolbar className="productPage-footer">
            <p>Footer</p>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
