import { Box } from "@chakra-ui/react";

import { ProductList } from "../../components/Products";
import useGet from "../../hooks/useGet";
import Carousel from "./Components/Carousel";

const Home = () => {
  const { response, loading } = useGet("products", ["image"]);

  return (
    <>
      <Carousel />
      <Box mt={10}>
        <ProductList response={response} loading={loading} />
      </Box>
    </>
  );
};

export default Home;
