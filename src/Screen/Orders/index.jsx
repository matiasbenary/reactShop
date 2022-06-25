import { useEffect } from "react";

import {
  Box,
  Heading,
  ListItem,
  OrderedList,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import useGet from "../../hooks/useGet";
import userState from "../../shared/user";
import { convertFilterOrder } from "../../utils/objectToUri";

const Orders = () => {
  const { response, loading, setFilters } = useGet("orders", ["image"]);
  const user = useRecoilValue(userState);
  useEffect(() => {
    setFilters(convertFilterOrder(user.user.id));
  }, [setFilters, user.user.id]);

  if (loading)
    return (
      <VStack minH="50vh" minW="100vw" align="center" justify="center">
        <Spinner />
      </VStack>
    );

  return (
    <Box p={{ base: 5, lg: null }}>
      <Heading>Mis Pedidos</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5} mt={5}>
        {response.data.map(({ id, attributes }) => (
          <VStack
            key={`pedido-${id}`}
            align="flex-start"
            bg="secondary"
            boxShadow="sm"
            rounded="sm"
            role="button"
            p={2}
          >
            <Heading as="h4" size="md">
              Pedido {`#${id}`}
            </Heading>
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                Productos
              </Text>
              <OrderedList>
                {attributes.Item.map((item) => (
                  <ListItem key={item.id} fontSize="sm">
                    {item.attributes.title}
                  </ListItem>
                ))}
              </OrderedList>
            </Box>
            <VStack>
              <Text fontWeight="bold">
                Fecha de compra:
                <Text as="span" ml={1}>
                  {new Date(attributes.createdAt).toLocaleDateString()}
                </Text>
              </Text>
            </VStack>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Orders;
