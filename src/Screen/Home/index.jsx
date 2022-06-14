import Cards from "../../Components/Cards";
import useGet from "../../hooks/useGet";
import Carousel from "./Components/Carousel";

const Home = () => {
  const { response, loading } = useGet("products", ["image"]);
  return (
    <>
      <Carousel />
      <Cards response={response} loading={loading} />
    </>
  );
};

export default Home;
