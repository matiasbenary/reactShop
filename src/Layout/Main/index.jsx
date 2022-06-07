import { Box, Container } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box flexGrow={1} bg="green.400">
      <Container maxW="container.xl" color="#262626">
        {children}
      </Container>
    </Box>
  );
};

export default Main;
