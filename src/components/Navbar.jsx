import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const SytledToolbar = styled( Toolbar )( {
    display: "flex",
    justifyContent: "space-between",
} );

const Navbar = () => {
    return (
      <AppBar position="stick">
            <Toolbar>
                <SytledToolbar>
                    <Typography variant="h6">
                        Programmer
                    </Typography>
                </SytledToolbar>
        </Toolbar>
      </AppBar>
    );
};

export default Navbar;
