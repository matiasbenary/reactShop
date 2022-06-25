import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import userState from "../../shared/user";

const Profile = () => {
  const { user } = useRecoilValue(userState);
  return (
    <Box>
      <Heading>Mi Perfil</Heading>
      <VStack bg="secondary" maxW="500px" m="auto" p={5} align="flex-start">
        <Heading as="h2" size="md">
          {user.username}
        </Heading>
        <Text>{user.email}</Text>
      </VStack>
    </Box>
  );
};
export default Profile;
