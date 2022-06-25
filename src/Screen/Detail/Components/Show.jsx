import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import useCart from "../../../hooks/useCart";
import useGet from "../../../hooks/useGet";

const Show = ({ id }) => {
  const { response } = useGet(`products/${id}/`, ["image"]);
  const [loading, setLoading] = useState(false);

  const { addProduct } = useCart();

  const { title, price, description, image } = response?.data.attributes || {};

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      addProduct(response?.data);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image?.data.attributes.url}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }} align="flex-start">
              <Text fontSize="md" color="gray.500">
                {description}
              </Text>
            </VStack>
          </Stack>

          <Button
            variant="brand"
            py={8}
            textTransform="uppercase"
            fontSize="xl"
            onClick={handleClick}
            isLoading={loading}
            loadingText="Agregando producto"
          >
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Show;
