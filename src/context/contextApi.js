import { createContext } from "react";

export const projectContext = createContext({
  drawerOpen: false,
  changeDrawerOpen: () => {},
  setDrawerOpen: () => {},
  currentButton: null,
  handleClick: (event, button) => {},
  handleClose: () => {},
  anchorEl: null,
  themeMode : null
});
