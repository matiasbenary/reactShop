import { useEffect, useState } from "react";

import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import { ProductList } from "../../components/Products";
import useDebounce from "../../hooks/useDebounce";
import useGet from "../../hooks/useGet";
import { convertFilter } from "../../utils/objectToUri";
import Filter from "./Components/Filter";
import Pagination from "./Components/Pagination";

const Search = () => {
  const { response, loading, setFilters, setPage } = useGet("products", [
    "image",
  ]);
  const [filter, setFilter] = useState({});
  const debouncedValue = useDebounce(filter, 500);
  useEffect(() => {
    setFilters(convertFilter(debouncedValue));
  }, [debouncedValue]);
  return (
    <Box pt={10}>
      {/* Instantaneo
      {JSON.stringify(filter)}
      Debounced
      {JSON.stringify(debouncedValue)} */}
      <Heading size="lg">Productos</Heading>
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["1fr", null, null, "auto 1fr"]}
        gap={5}
      >
        <Filter setFilter={setFilter} />
        <Box>
          <ProductList response={response} loading={loading} />
          {response && (
            <Pagination
              setPage={setPage}
              pagination={response.meta.pagination}
            />
          )}
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Search;
