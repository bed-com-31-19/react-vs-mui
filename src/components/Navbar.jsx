import { Pets } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const SytledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <SytledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Programmer
            <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          </Typography>
        </SytledToolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
