import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { CartItem } from "../../components/Cart/CartItem";
import { OrderSummary } from "../../components/Cart/OrderSummary";
import cartState from "../../shared/cart";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  return (
    <Container maxW="full" my={10} textAlign="center">
      <Heading>Cart</Heading>
      {/* Carrito vacio */}
      {!cart.length && <Heading>Carrito vacio</Heading>}

      {/* carrito */}
      {!!cart.length && (
        <SimpleGrid columns={[1, null, null, 2]} gap={5} mt={[10, null, 24]}>
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
