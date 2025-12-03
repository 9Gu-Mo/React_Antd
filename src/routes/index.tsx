import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import NotFound from "./NotFound";
import Common from "./Common";
import Info from "./Info";
import TriangleEvaluation from "./TriangleEvaluation";
import DodEvaluation from "./DodEvaluation";
import CQEvaluation from "./CQEvaluation";
import Start from "./Start";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "info", element: <Info /> }, // 사용자 정보 입력
      { path: "start", element: <Start /> }, // 시작 전 안내
      { path: "triangle", element: <TriangleEvaluation /> }, // triangle
      { path: "dod", element: <DodEvaluation /> }, // dod
      { path: "cqe", element: <CQEvaluation /> }, // cqe(사내 품질 평가)
      { path: "common", element: <Common /> }, // 공통
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);
