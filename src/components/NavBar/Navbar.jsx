import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Popovers, CustomButton } from "..";
import { Menu } from "@mui/icons-material";
import { useContext } from "react";
import { projectContext } from "../../context/contextApi";
const Navbar = () => {
  const { setDrawerOpen } = useContext(projectContext);
  return (
    <AppBar sx={{paddingY:2}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
            },
          }}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <Menu sx={{ color: "#ad0071", fontSize: "30px" }} />
        </IconButton>
        <Box
          component="img"
          src="/images/logo.png"
          sx={{
            width: "180px",
            height: "auto",
            mx: {
              xs: "auto",
              sm: "auto",
              md: 0,
            },
          }}
          alt="Logo"
        />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Popovers />
        </Box>
        <CustomButton>شروع سرمایه گذاری</CustomButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
