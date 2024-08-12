import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./pages/Layout.tsx";
import { ShowCreators } from "./pages/ShowCreators.tsx";
import { ViewCreator } from "./pages/ViewCreator.tsx";
import { AddCreator } from "./pages/AddCreator.tsx";
import { EditCreator } from "./pages/EditCreator.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShowCreators />,
      },
      {
        path: "/:creatorId",
        element: <ViewCreator />,
      },
      {
        path: "/add",
        element: <AddCreator />,
      },
      {
        path: "/edit/:creatorId",
        element: <EditCreator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
