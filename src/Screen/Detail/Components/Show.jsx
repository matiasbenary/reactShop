import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import useCart from "../../../hooks/useCart";
import useGet from "../../../hooks/useGet";

// const item = {
//   id: 1,
//   attributes: {
//     title: "Botellas almacenadoras",
//     price: 200,
//     description: "Son botellas",
//     createdAt: "2022-06-13T02:37:31.173Z",
//     updatedAt: "2022-06-13T02:38:54.164Z",
//     publishedAt: "2022-06-13T02:38:54.098Z",
//     stock: 1000,
//     image: {
//       data: {
//         id: 3,
//         attributes: {
//           name: "102.webp",
//           alternativeText: "102.webp",
//           caption: "102.webp",
//           width: 400,
//           height: 400,
//           formats: {
//             thumbnail: {
//               ext: ".webp",
//               url: "https://res.cloudinary.com/dhf7tktdx/image/upload/v1655087808/thumbnail_102_d0a7a47a28.webp",
//               hash: "thumbnail_102_d0a7a47a28",
//               mime: "image/webp",
//               name: "thumbnail_102.webp",
//               path: null,
//               size: 1.95,
//               width: 156,
//               height: 156,
//               provider_metadata: {
//                 public_id: "thumbnail_102_d0a7a47a28",
//                 resource_type: "image",
//               },
//             },
//           },
//           hash: "102_d0a7a47a28",
//           ext: ".webp",
//           mime: "image/webp",
//           size: 7.79,
//           url: "https://res.cloudinary.com/dhf7tktdx/image/upload/v1655087808/102_d0a7a47a28.webp",
//           previewUrl: null,
//           provider: "cloudinary",
//           provider_metadata: {
//             public_id: "102_d0a7a47a28",
//             resource_type: "image",
//           },
//           createdAt: "2022-06-13T02:36:49.302Z",
//           updatedAt: "2022-06-13T02:36:49.302Z",
//         },
//       },
//     },
//   },
// };

const Show = ({ id }) => {
  const { response } = useGet(`products/${id}/`, ["image"]);

  const { addProduct } = useCart();

  const { title, price, description, image } = response?.data.attributes || {};

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
              <Text fontSize={"lg"}>{description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => {
              addProduct(response?.data);
            }}
          >
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Show;
