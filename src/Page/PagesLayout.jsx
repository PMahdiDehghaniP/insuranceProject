import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/FooterComponents/Footer";
import MainLayOut from "../layouts/MainLayOut";
import { useContext } from "react";
import { projectContext } from "../context/contextApi";
import DrawerContainer from "../components/Drawer/DrawerContainer";

const PageLayout = ({ children }) => {
  const { themeMode } = useContext(projectContext);
  return (
    <>
      <MainLayOut mode={themeMode}>
      <DrawerContainer />
        <Navbar />
        {children}
        <Outlet />
        <Footer />
      </MainLayOut>
    </>
  );
};
export default PageLayout;
