import { SimpleGrid, Skeleton } from "@chakra-ui/react";

import { CardProduct } from "./CardProduct";
import products from "./products";
// import images from "./img";

const ProductList = ({ response, loading }) => {
  // console.log(response);
  // return null;
  // <Flex w="100%" flexWrap="wrap" mt="10" justify-content="space-between">
  if (loading) {
    return (
      <SimpleGrid w="100%" my="10" minChildWidth="330px" spacing="40px">
        {products.data.map((product) => (
          <Skeleton key={`loadingCard${product.id}`}>
            <CardProduct id={product.id} data={product.attributes} />
          </Skeleton>
        ))}
      </SimpleGrid>
    );
  }
  return (
    <SimpleGrid
      columns={[1, null, 2, 3]}
      w="100%"
      spacing={["40px", null, "20px"]}
      justifyItems="center"
    >
      {response &&
        response.data.map((product) => (
          <CardProduct
            key={`card-${product.id}`}
            id={product.id}
            data={product.attributes}
          />
        ))}
    </SimpleGrid>
  );
};

export { ProductList };
