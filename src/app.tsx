import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";


import { RouterProvider } from "react-router-dom";

import { ROUTES } from "./constants/application/routing";

import "./styles/index.css";

const container = document.getElementById("app")!;
const queryClient = new QueryClient();

ReactDOM.createRoot(container).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
  </StrictMode>,
);