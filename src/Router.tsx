import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Root from "./App";
import Registration from "./pages/registration";
import Category from "./pages/catgory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
    ],
  },
]);
