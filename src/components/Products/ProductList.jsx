import { SimpleGrid, Skeleton } from "@chakra-ui/react";

import { CardProduct } from "./CardProduct";
import products from "./products";
// import images from "./img";

const ProductList = ({ response, loading }) => {
  if (loading) {
    return (
      <SimpleGrid
        columns={[1, null, 2, 3]}
        w="100%"
        spacing={["40px", null, "20px"]}
        justifyItems="center"
      >
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
