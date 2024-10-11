import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/index.js";
import Logo from "../components/MainPageLogo.jsx";
import InsuranceContainer from "../components/Insurance/InsuranceContainer.jsx";
import DrawerContainer from "../components/Drawer/DrawerContainer.jsx";
import BimeCardSlider from "../components/BimeCardSlider.jsx";
import Footer from "../components/FooterComponents/Footer.jsx";
import MainLayOut from "../layouts/MainLayOut.jsx";
function Home() {
  return (
    <>
      <MainLayOut>
        <Helmet>
          <title>صفحه اصلی | بیمه 5+1</title>
        </Helmet>
        <DrawerContainer />
        <Navbar />
        <Logo />
        <InsuranceContainer />
        <BimeCardSlider />
        <Footer />
      </MainLayOut>
    </>
  );
}

export default Home;
