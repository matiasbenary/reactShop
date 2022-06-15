import { useEffect, useState } from "react";

import { ProductList } from "../../components/Products";
import useDebounce from "../../hooks/useDebounce";
import useGet from "../../hooks/useGet";
import { convertFilter } from "../../utils/objectToUri";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";

const Search = () => {
  const { response, loading, setFilters, setPage } = useGet("products", [
    "image",
  ]);
  const [filter, setFilter] = useState({});
  const debouncedValue = useDebounce(filter, 500);
  useEffect(() => {
    setFilters(convertFilter(debouncedValue));
  }, [debouncedValue]);
  console.log(response);
  return (
    <>
      Instantaneo
      {JSON.stringify(filter)}
      Debounced
      {JSON.stringify(debouncedValue)}
      <Filter setFilter={setFilter} />
      <ProductList response={response} loading={loading} />
      {response && (
        <Pagination setPage={setPage} pagination={response.meta.pagination} />
      )}
    </>
  );
};

export default Search;
