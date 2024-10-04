import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import InsurancePage from "../Page/PagesLayout";
import PageLayout from "../Page/PagesLayout";
import ContactUs from "../Page/ContactUs";
export const ProjectRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/insurance",
    element: <PageLayout />,
    children: [
      { path: "Building" },
      { path: "Supplementary" },
      { path: "Travel" },
      { path: "Fire" },
      { path: "Life" },
      { path: "Earthquake" },
      { path: "CarBody" },
      { path: "ThirdParty" },
    ],
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
]);
