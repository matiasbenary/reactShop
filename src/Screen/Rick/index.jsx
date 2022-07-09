import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

const Character = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const response = await res.json();
      setData(response.results);
    };
    getInfo();
  }, []);
  return (
    <Box>
      {data.map((info) => {
        return (
          <Box>
            <h2>{info.name}</h2>
            <img src={info.image} alt="" />
          </Box>
        );
      })}
    </Box>
  );
};

export default Character;
