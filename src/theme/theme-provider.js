import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 910,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#242323",
    },
    secondary: {
      main: "#2e2d2d",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 740,
      md: 910,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#e0dede",
    },
    secondary: {
      main: "#bdbdbd",
    },
    background: {
      default: "#292929",
      paper: "#1d1d1d",
    },
  },
});
