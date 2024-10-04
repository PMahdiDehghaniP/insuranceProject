import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainLayOut from "./layouts/MainLayOut.jsx";
import { Helmet } from "react-helmet-async";
import { Navbar } from "./components/index.js";
import Logo from "./components/MainPageLogo.jsx";
import InsuranceContainer from "./components/InsuranceContainer.jsx";
import { projectContext } from "./context/contextApi.js";
import DrawerContainer from "./components/Drawer/DrawerContainer.jsx";
import BimeCardSlider from "./components/BimeCardSlider.jsx";
import Footer from "./components/FooterComponents/Footer.jsx";
function App() {
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
  return (
    <>
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
        <MainLayOut mode={mode}>
          <Helmet>
            <title>صفحه اصلی بورس 5+1</title>
          </Helmet>
          <DrawerContainer />
          <Navbar />
          <Logo />
          <InsuranceContainer />
          <BimeCardSlider />
          <Footer />
        </MainLayOut>
      </projectContext.Provider>
    </>
  );
}

export default App;
