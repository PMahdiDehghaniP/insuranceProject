import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { darkTheme, lightTheme } from "../theme/theme-provider";
import { Box, CssBaseline } from "@mui/material";
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayOut = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
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
            </Box>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
export default MainLayOut;
