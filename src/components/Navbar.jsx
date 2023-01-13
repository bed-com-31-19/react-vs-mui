import React from "react";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import FlexBetween from "./FlexBetween";


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <FlexBetween>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Programmer
          </Typography>
          <HomeIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Icons>
        </FlexBetween>
      </AppBar>
    </Box>
  );
};

export default Navbar;
