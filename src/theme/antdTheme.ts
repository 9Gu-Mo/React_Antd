import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: "'Pretendard'",
  },

  components: {
    // form
    Form: {
      verticalLabelPadding: 0,
    },

    // button
    Button: {
      defaultColor: "#777",
      defaultBg: "#EBEFF5",
      defaultBorderColor: "#EBEFF5",
      defaultHoverColor: "#777",
      defaultHoverBg: "#EBEFF5",
      defaultHoverBorderColor: "#EBEFF5",
      defaultActiveColor: "#777",
      defaultActiveBg: "#EBEFF5",
      defaultActiveBorderColor: "#EBEFF5",
      colorPrimary: "#6152ED",
      colorPrimaryHover: "#6152ED",
      colorPrimaryActive: "#6152ED",
      controlHeight: 40,
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 18,
      colorBgContainerDisabled: "#EBEFF5",
      borderColorDisabled: "#EBEFF5",
      colorTextDisabled: "#bbb",
    },

    // input
    Input: {
      borderRadius: 12,
      colorBgContainer: "#fff",
      colorBorder: "#d3d3d3",
      activeBorderColor: "#1e88e5",
      hoverBg: "#fff",
      hoverBorderColor: "#ddd",
      colorTextPlaceholder: "#999",
      controlHeight: 48,
      fontSize: 16,
    },

    // Typography
    Typography: {
      // title font size
      fontSizeHeading1: 48,
      fontSizeHeading2: 32,
      fontSizeHeading3: 20,
      fontSizeHeading4: 18,
      fontSizeHeading5: 16,

      // title font color
      colorTextHeading: "#222222",

      // title margin
      titleMarginBottom: 0,
      titleMarginTop: 0,

      // font weight
      fontWeightStrong: 600,

      // text font size
      fontSize: 16,

      // text font color
      colorText: "#555555",
    },

    // check
    Checkbox: {},

    // radio
    Radio: {
      // border
      borderRadius: 12,

      // color
      colorPrimary: "#6152ED",

      // hover
      controlOutline: "#6152ED",
    },
  },
};
