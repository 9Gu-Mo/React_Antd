import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import NotFound from "./NotFound";
import Common from "./Common";
import Info from "./Info";
import Notice from "./Notice";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "info", element: <Info /> }, // 사용자 정보 입력
      { path: "notice", element: <Notice /> }, // 안내
      { path: "common", element: <Common /> }, // 공통
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);
