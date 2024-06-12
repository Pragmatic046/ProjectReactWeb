import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/login";
import Root from "./components/root";
import ErrorPage from "./components/errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
