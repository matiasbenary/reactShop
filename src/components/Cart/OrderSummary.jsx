import {
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Tfoot,
  Tr,
  VStack,
} from "@chakra-ui/react";

import useCart from "../../hooks/useCart";

export const OrderSummary = () => {
  const { calcTotal } = useCart();

  return (
    <VStack
      spacing={10}
      align="flex-start"
      w="full"
      bg="gray.100"
      p={[4, null, 8]}
    >
      <Heading size="lg" fontWeight="light">
        Pedido
      </Heading>
      <Table variant="ghost">
        <Tbody>
          <Tr>
            <Td w="50%">Envio</Td>
            <Td>Enter your address to view shipping options.</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td w="50%">Total</Td>
            <Td fontWeight="bold">${calcTotal()}</Td>
          </Tr>
        </Tfoot>
      </Table>
      <Button size="lg" w="full" colorScheme="blackAlpha">
        Finalizar Compra
      </Button>
    </VStack>
  );
};
