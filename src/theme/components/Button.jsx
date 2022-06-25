export const Button = {
  // The styles all button have in common
  baseStyle: {
    _focus: { boxShadow: "none" },
    rounded: "xs",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  variants: {
    brand: {
      background: "brand",
      color: "white",
      _hover: {
        background: "brand.500",
        _disabled: { background: "brand.300" },
      },

      _disabled: { opacity: 0.5 },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
  },
};
