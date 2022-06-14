import { useEffect, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Switch,
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
    <>
      <Input
        mt="4"
        placeholder="Basic usage"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Box>
        <NumberInput
          min={0}
          onChange={(price) => setMinPrice(Number(price))}
          value={minPrice}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput
          min={0}
          onChange={(price) => setMaxPrice(Number(price))}
          value={maxPrice}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormControl>
          <FormLabel htmlFor="isChecked">Unidades disponibles</FormLabel>
          <Switch
            id="isChecked"
            isChecked={hasStock}
            onChange={() => setHasStock(!hasStock)}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Filter;
