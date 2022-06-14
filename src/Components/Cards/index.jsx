import { SimpleGrid, Skeleton } from "@chakra-ui/react";

import Card from "../Card";
import products from "./products";
// import images from "./img";

const Cards = ({ response, loading }) => {
  // console.log(response);
  // return null;
  // <Flex w="100%" flexWrap="wrap" mt="10" justify-content="space-between">
  if (loading) {
    return (
      <SimpleGrid w="100%" my="10" minChildWidth="330px" spacing="40px">
        {products.data.map((product) => (
          <Skeleton key={`loadingCard${product.id}`}>
            <Card id={product.id} data={product.attributes} />
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
          />
        ))}
    </SimpleGrid>
  );
};

export default Cards;
