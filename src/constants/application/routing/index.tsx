import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "@/components/pages/shared/error";
import { HomePage } from "@/components/pages/shared/home";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Здесь AppHeader
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
