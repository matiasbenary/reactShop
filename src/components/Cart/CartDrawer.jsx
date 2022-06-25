import { useRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  Circle,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { Link as ReachLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import useCart from "../../hooks/useCart";
import cartState from "../../shared/cart";
import { CartItem } from "./CartItem";

export const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const cart = useRecoilValue(cartState);
  const { emptyCart, calcTotal } = useCart();
  return (
    <>
      <Button
        ref={btnRef}
        variant="ghost"
        position="relative"
        size="sm"
        onClick={onOpen}
      >
        <BsCart size={22} />
        <Circle
          position="absolute"
          top={0}
          right={0}
          bg="brand"
          color="white"
          w={4}
          h={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text as="span" fontSize="9px">
            {cart.length}
          </Text>
        </Circle>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary">
          <DrawerCloseButton />
          <DrawerHeader>Mi Carrito</DrawerHeader>

          <DrawerBody>
            {!cart.length && (
              <VStack w="full" align="center" spacing={8}>
                <Text>Tu carrito esta vacio.</Text>
                <Link
                  as={ReachLink}
                  to="/"
                  bg="brand"
                  p="10px 5px"
                  rounded="lg"
                  color="white"
                  onClick={onClose}
                >
                  Volver a la tienda
                </Link>
              </VStack>
            )}

            {cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </DrawerBody>

          {!!cart.length && (
            <DrawerFooter flexDirection="column" gap={5}>
              <Button
                w="100%"
                colorScheme="red"
                variant="outline"
                rounded="sm"
                onClick={emptyCart}
              >
                Vaciar Carrito
              </Button>
              <Flex w="full" justify="space-between" align="flex-end">
                <Heading size="lg">Total:</Heading>
                <Text fontSize="xl">${calcTotal()}</Text>
              </Flex>
              <Link
                as={ReachLink}
                to="/carrito"
                variant="button"
                onClick={onClose}
              >
                Continuar Compra
              </Link>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
