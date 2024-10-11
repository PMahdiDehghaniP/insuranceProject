import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../theme/theme-provider";
import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { projectContext } from "../context/contextApi";
import { Outlet } from "react-router-dom";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayOut = ({ children }) => {
  const [mode, setMode] = useState();
  const [currentButton, setCurrentButton] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);
  const changeDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };
  const handleClick = (event, button) => {
    setAnchorEl(event.currentTarget);
    setCurrentButton(button);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
    setCurrentButton(null);
  };
  const handleChangeTheme = () => {
    setMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <projectContext.Provider
            value={{
              drawerOpen,
              anchorEl,
              currentButton,
              handleClick,
              handleClose,
              changeDrawerOpen,
              setDrawerOpen,
              themeMode: mode,
            }}
          >
            <HelmetProvider>
              <CssBaseline />
              <Box
                component="div"
                sx={{
                  backgroundColor: theme.palette.background.default,
                  padding: 0,
                  margin: 0,
                  overflowX: "hidden",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  overflowY: "auto",
                  height: "100vh",
                  width: "100%",
                  textAlign: "center",
                }}
              >
              {children}
               <Outlet/>
              </Box>
            </HelmetProvider>
          </projectContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default MainLayOut;
