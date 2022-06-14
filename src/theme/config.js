const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: ` sans-serif; `,
    body: `sans-serif; `,
  },
  styles: {
    global: {
      "html, body": {
        bg: "primary",
      },
    },
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "#F5F4F5",
        _dark: "#262626",
      },
      secondary: {
        default: "#FFFFFF",
        _dark: "#111111",
      },
      brand: {
        default: "#3F7BFB",
      },
    },
  },
  colors: {
    brand: {
      300: "#4780f7",
      500: "#0a55f4",
    },
  },
};

export default config;
