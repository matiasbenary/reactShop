import { Link } from "./components/Link";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `"DM Sans", sans-serif`,
    body: `"DM Sans", sans-serif`,
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
        default: "#FFFFFF",
        _dark: "#262626",
      },
      secondary: {
        default: "#F5F4F5",
        _dark: "#111111",
      },
      brand: {
        default: "#A18A68",
      },
    },
  },
  colors: {
    brand: {
      300: "#af9b7e",
      500: "#8a7556",
    },
  },
  components: {
    Link,
  },
};

export default config;
