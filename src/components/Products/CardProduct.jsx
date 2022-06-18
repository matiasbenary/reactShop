import {
  Box,
  Flex,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardProduct = ({ data, id }) => {
  return (
    <LinkBox as="article" maxW="xs" role="group">
      <Box position="relative" overflow="hidden" roundedTop="lg" bg="secondary">
        <Image src={data.image.data.attributes.url} />
        <Flex
          position="absolute"
          bg="secondary"
          bottom={-100}
          left={0}
          w="full"
          minH="60px"
          align="center"
          justify="center"
          transition="all .25s ease"
          _groupHover={{
            bottom: 0,
          }}
        >
          <Text fontWeight="bold">Ver mas detalles</Text>
        </Flex>
      </Box>
      <VStack align="flex-start" p={1}>
        <Heading size="md" my="2">
          <LinkOverlay as={Link} to={`/producto/${id}`}>
            {data.title}
          </LinkOverlay>
        </Heading>
        <Text color="brand" fontSize="xl" fontWeight="bold">
          $ {data.price}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export { CardProduct };
