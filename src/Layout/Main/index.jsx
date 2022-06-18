import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box flexGrow={1} mt={5} mb={24}>
      {children}
    </Box>
  );
};

export default Main;
