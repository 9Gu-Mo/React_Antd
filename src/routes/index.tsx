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
import DodEvaluation2 from "./DodEvaluation2";
import DodEvaluation3 from "./DodEvaluation3";
import CQEvaluation2 from "./CQEvaluation2";
import CQEvaluation3 from "./CQEvaluation3";
import ProfilingEvaluation from "./ProfilingEvaluation";
import ProfilingEvaluation2 from "./ProfilingEvaluation2";

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
      { path: "dod2", element: <DodEvaluation2 /> }, // dod2
      { path: "dod3", element: <DodEvaluation3 /> }, // dod2
      { path: "cqe", element: <CQEvaluation /> }, // cqe(사내 품질 평가)
      { path: "cqe2", element: <CQEvaluation2 /> }, // cqe2(사내 품질 평가2)
      { path: "cqe3", element: <CQEvaluation3 /> }, // cqe3(사내 품질 평가3)
      { path: "profiling", element: <ProfilingEvaluation /> }, // profiling
      { path: "profiling2", element: <ProfilingEvaluation2 /> }, // profiling2
      { path: "common", element: <Common /> }, // 공통
      { path: "*", element: <NotFound /> }, // 404
    ],
  },
]);
