import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Page/ContactUs";
import BuildingInsurance from "../Page/Building";
import Home from "../Page/Home";
import MainLayOut from "../layouts/MainLayOut";
import Travel from "../Page/Travel";
import Fire from "../Page/Fire";
import Supplementary from "../Page/Supplementary";
import Life from "../Page/Life";
import CarBody from "../Page/CarBody";
import ThirdParty from "../Page/ThirdParty";
import Earthquake from "../Page/Earthquake";
export const ProjectRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/insurance",
    element: <MainLayOut />,
    children: [
      { path: "Building", element: <BuildingInsurance /> },
      { path: "Supplementary", element: <Supplementary /> },
      { path: "Travel", element: <Travel /> },
      { path: "Fire", element: <Fire /> },
      { path: "Life", element: <Life /> },
      { path: "Earthquake", element: <Earthquake /> },
      { path: "CarBody", element: <CarBody /> },
      { path: "ThirdParty", element: <ThirdParty /> },
    ],
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
]);
