import * as React from "react";
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
//import Root from "./routes/root";
import ErrorPage from './error-page';
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";
import Image from "../fetch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,    
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts/:fetch",
        element: <Image />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Image />
  </React.StrictMode>
)