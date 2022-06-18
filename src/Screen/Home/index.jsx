import { Box } from "@chakra-ui/react";

import { ProductList } from "../../components/Products";
import useGet from "../../hooks/useGet";
import Carousel from "./components/Carousel";

const Home = () => {
  const { response, loading } = useGet("products", ["image"]);
  console.log(response);
  // return null;
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
