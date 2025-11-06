import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Common from "./Common";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "common", element: <Common /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
