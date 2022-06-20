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
import { useSetRecoilState } from "recoil";

import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import authModal from "../../shared/authModal";

export const OrderSummary = () => {
  const { calcTotal } = useCart();
  const { user } = useUser();

  const setShowModal = useSetRecoilState(authModal);

  const handleOnClick = () => {
    if (!user) {
      setShowModal(true);
    }
  };

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
      <Button
        size="lg"
        w="full"
        colorScheme="blackAlpha"
        onClick={handleOnClick}
      >
        Finalizar Compra
      </Button>
    </VStack>
  );
};
