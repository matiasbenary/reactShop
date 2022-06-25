import { useState } from "react";

import {
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Tfoot,
  Tr,
  useToast,
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
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const toast = useToast({
    variant: "top-accent",
    isClosable: true,
    duration: 3000,
  });
  const navigate = useNavigate();

  const setShowModal = useSetRecoilState(authModal);

  const handleOnClick = async () => {
    setLoading(true);
    if (!user) {
      setShowModal(true);
    } else {
      try {
        await axios.post(
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
        toast({
          title: "Compra realizada con exito",
          status: "success",
        });
        emptyCart();
        navigate("/pedidos");
      } catch (error) {
        toast({
          title: "Error",
          description: "Ups algo salio mal",
          status: "error",
        });
      }
    }
    setLoading(false);
  };

  return (
    <VStack
      spacing={10}
      align="flex-start"
      w="full"
      bg="secondary"
      p={[4, null, 8]}
    >
      <Heading size="lg" fontWeight="light">
        Pedido
      </Heading>
      <Table variant="ghost">
        <Tbody>
          <Tr>
            <Td w="50%">Envio</Td>
            <Td>Por el momento no hacemos envios ☹️.</Td>
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
        variant="brand"
        onClick={handleOnClick}
        isLoading={loading}
      >
        Finalizar Compra
      </Button>
    </VStack>
  );
};
