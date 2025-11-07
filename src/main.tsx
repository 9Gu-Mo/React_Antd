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
    {/* <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        // ["default", "primary", "danger", "blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
        token: {
          colorPrimary: "#000fff", // primary
          colorError: "#ff0000", // danger(error)
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider> */}

    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
