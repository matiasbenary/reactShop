import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

export const CartItem = ({ product }) => {
  const { id, cant } = product;
  const { title, price, image } = product.attributes;
  const { deleteProduct, removeOneProduct, addProduct } = useCart();

  return (
    <SimpleGrid
      columns={3}
      templateColumns="75px 1fr auto"
      w="full"
      gap={1}
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.500"
      py={4}
      position="relative"
    >
      {/* Imagen */}
      <Box as={Link} to={`/detail/${id}`}>
        <Image src={image.data.attributes.url} alt="Dan Abramov" />
      </Box>

      {/* Titulo y precio */}
      <Flex direction="column" h="full" align="start" fontSize="sm">
        <Heading as="h5" size="md">
          {title}
        </Heading>
        <Text>${price}</Text>
      </Flex>

      {/* Cantidad */}
      <Box>
        <NumberInput size="xs" maxW={16} min={1} defaultValue={cant}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper onClick={() => addProduct(product)} />
            <NumberDecrementStepper onClick={() => removeOneProduct(product)} />
          </NumberInputStepper>
        </NumberInput>
      </Box>

      {/* Eliminar */}
      <IconButton
        icon={<DeleteIcon />}
        variant="ghost"
        colorScheme="red"
        size="xs"
        position="absolute"
        top={0}
        right={0}
        onClick={() => deleteProduct(product)}
      />
    </SimpleGrid>
  );
};
