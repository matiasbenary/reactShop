import { Flex, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card";
// import images from "./img";

const Cards = () => {
  const info = {
    id: 1,
    stock: 100,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVlYmxlc3xlbnwwfHwwfHw%3D",
    title: "Prueba",
    price: 100,
  };
  console.log(info);
  // <Flex w="100%" flexWrap="wrap" mt="10" justify-content="space-between">

  return (
    <SimpleGrid w="100%" my="10" minChildWidth="330px" spacing="40px">
      <Card data={info}></Card>
      <Card data={info}></Card>
      <Card data={info}></Card>
      <Card data={info}></Card>
      <Card data={info}></Card>
      <Card data={info}></Card>
    </SimpleGrid>
  );
};

export default Cards;
