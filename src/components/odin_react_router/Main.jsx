import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Profile from './Profile';
import Spinach from './Spinach';
import Popeye from './Popeye';
import DefaultProfile from './DefaultProfile';
import ErrorPage from './ErrorPage';
import Router from './Router';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//     // children: [
//     //   {index: true, element: <DefaultProfile/>},
//     //   {path: 'spinach', element: <Spinach/>},
//     //   {path: 'popeye', element: <Popeye/>},
//     // ]
//   },
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);