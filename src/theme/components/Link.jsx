export const Link = {
  // The styles all button have in common
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    sm: {},
  },
  variants: {
    button: {
      background: "brand",
      bg: "blue.500",
      w: "full",
      textAlign: "center",
      py: 2,
      rounded: "md",
      color: "white",
      transition: "background 0.2s ease",
      _hover: { background: "brand.300", border: 0, textDecoration: "none" },
    },
  },
  // The default size and variant values
  defaultProps: {},
};
