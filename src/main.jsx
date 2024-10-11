import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider } from "react-router-dom";
import { ProjectRouter } from "./Router/Route.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={ProjectRouter} />
  </StrictMode>
);
