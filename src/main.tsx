import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";

// style
import "antd/dist/reset.css";
import "./global.scss";
import { ConfigProvider } from "antd";
import { antdTheme } from "./theme/antdTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
