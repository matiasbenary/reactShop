import { useEffect, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";

const Filter = ({ setFilter }) => {
  const [title, setTitle] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [hasStock, setHasStock] = useState(true);

  useEffect(() => {
    if (maxPrice < minPrice) {
      setMaxPrice(minPrice);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const filter = { title, minPrice, maxPrice, hasStock };
    setFilter(filter);
  }, [title, minPrice, maxPrice, hasStock]);

  return (
    <VStack
      minW={["auto", null, "300px"]}
      spacing={10}
      w="full"
      mt={10}
      p={{ base: 2, lg: 0 }}
    >
      <Input
        placeholder="Buscar..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Box w="full">
        <Text>Filtrar por precio</Text>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[0, 10000]}
          onChangeEnd={(values) => {
            setMaxPrice(values[1]);
            setMinPrice(values[0]);
          }}
          min={0}
          max={10000}
          step={100}
          colorScheme="yellow"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} bg="yellow.500" />
          <RangeSliderThumb index={1} bg="yellow.500" />
        </RangeSlider>
        <Text color="gray" fontSize="14px">
          Precio: ${minPrice} - ${maxPrice}
        </Text>
      </Box>
      <FormControl>
        <FormLabel htmlFor="isChecked">Unidades disponibles</FormLabel>
        <Switch
          id="isChecked"
          isChecked={hasStock}
          onChange={() => setHasStock(!hasStock)}
        />
      </FormControl>
    </VStack>
  );
};

export default Filter;
