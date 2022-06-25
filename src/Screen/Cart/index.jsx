import {
  Container,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { CartItem } from "../../components/Cart/CartItem";
import { OrderSummary } from "../../components/Cart/OrderSummary";
import cartState from "../../shared/cart";

const Cart = () => {
  const cart = useRecoilValue(cartState);

  return (
    <Container maxW="full" my={5} textAlign="center">
      <Heading>Finalizar Compra</Heading>
      {/* Carrito vacio */}
      {!cart.length && (
        <VStack
          w="full"
          bg="secondary"
          borderBottom="1px solid"
          borderColor="gray"
          align="flex-start"
          p={5}
        >
          <Text>Tu carrito esta vacio.</Text>
          <Link
            as={ReachLink}
            to="/"
            bg="brand"
            p="10px 5px"
            rounded="lg"
            color="white"
          >
            Volver a la tienda
          </Link>
        </VStack>
      )}

      {/* carrito */}
      {!!cart.length && (
        <SimpleGrid columns={[1, null, null, 2]} gap={5} mt={[10, null, 14]}>
          {/* Productos del carrito */}
          <VStack>
            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </VStack>

          {/* Resumen del pedido */}
          <OrderSummary />
        </SimpleGrid>
      )}
    </Container>
  );
};

export default Cart;
