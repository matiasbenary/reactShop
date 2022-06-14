import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import cartState from "../../shared/cart";
import { CartItem } from "./components/CartItem";
import { OrderSummary } from "./components/OrderSummary";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  return (
    <Container maxW={["full", null, "75vw"]} my={10} textAlign="center">
      <Heading>Cart</Heading>
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
    </Container>
  );
};

export default Cart;
