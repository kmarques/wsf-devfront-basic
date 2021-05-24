import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import MuiButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <MuiAppBar position="static">
      <MuiToolbar>
        <MuiTypography variant="h6" style={{ flexGrow: 1 }}>
          Website
        </MuiTypography>
        <MuiButton component={Link} to="/products" color="inherit">
          Products
        </MuiButton>
        <MuiButton component={Link} to="/buttons" color="inherit">
          Buttons
        </MuiButton>
      </MuiToolbar>
    </MuiAppBar>
  );
}

export default Header;
