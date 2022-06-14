import { SimpleGrid, Skeleton } from "@chakra-ui/react";

import useGet from "../../hooks/useGet";
import Card from "../Card";
import products from "./products";
// import images from "./img";

const Cards = () => {
  const { response, error, loading } = useGet("products?populate=image");
  // console.log(response);
  // return null;
  // <Flex w="100%" flexWrap="wrap" mt="10" justify-content="space-between">
  if (loading) {
    return (
      <SimpleGrid w="100%" my="10" minChildWidth="330px" spacing="40px">
        {products.data.map((product) => (
          <Skeleton key={`loadingCard${product.id}`}>
            <Card id={product.id} data={product.attributes}></Card>
          </Skeleton>
        ))}
      </SimpleGrid>
    );
  }
  return (
    <SimpleGrid w="100%" my="10" minChildWidth="330px" spacing="40px">
      {response &&
        response.data.map((product) => (
          <Card
            key={`card${product.id}`}
            id={product.id}
            data={product.attributes}
          ></Card>
        ))}
    </SimpleGrid>
  );
};

export default Cards;
