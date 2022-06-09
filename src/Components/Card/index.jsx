import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Box
      role={"group"}
      p={6}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      as={ReachLink}
      to={`detail/${data.id}`}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${data.img})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={data.img}
        />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          Brand
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {data.title}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Text fontWeight={800} fontSize={"xl"}>
            {data.price}
          </Text>
          <Text textDecoration={"line-through"} color={"gray.600"}></Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
