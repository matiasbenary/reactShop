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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";
import authModal from "../../shared/authModal";

export const OrderSummary = () => {
  const { calcTotal, cart, emptyCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const setShowModal = useSetRecoilState(authModal);

  const handleOnClick = async () => {
    if (!user) {
      setShowModal(true);
    } else {
      const response = await axios.post(
        "https://strapiecommerce-production.up.railway.app/api/orders",
        {
          data: { Item: cart, users_permissions_users: user.user.id },
        },
        {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      emptyCart();
      navigate("/pedidos");
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
