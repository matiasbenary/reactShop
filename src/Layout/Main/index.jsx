import { Box } from "@chakra-ui/react";

import AuthModal from "./Components/AuthModal";

const Main = ({ children }) => {
  return (
    <Box flexGrow={1} mt={5} mb={24}>
      <AuthModal />
      {children}
    </Box>
  );
};

export default Main;
