import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: "'Pretendard'",
    fontSizeHeading1: 48,
  },

  components: {
    // button
    Button: {
      colorPrimary: "#1e88e5",
      colorPrimaryHover: "#1565c0",
      colorPrimaryActive: "#0d47a1",
      controlHeight: 40,
      borderRadius: 8,
      fontWeight: 400,
      defaultHoverColor: "#1e88e5", // default 버튼 hover 시 텍스트 색상
      defaultHoverBg: "transparent", // hover 배경 제거
    },

    // input
    Input: {
      borderRadius: 6,
      colorBgContainer: "#fff",
      colorBorder: "#ccc",
      activeBorderColor: "#1e88e5",
      hoverBg: "#fff",
      hoverBorderColor: "#ccc",
    },

    // check
    Checkbox: {},

    // radio
    Radio: {},
  },
};
