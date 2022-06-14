import { useEffect, useState } from "react";

import Cards from "../../Components/Cards";
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
  console.log(response);
  return (
    <>
      Instantaneo
      {JSON.stringify(filter)}
      Debounced
      {JSON.stringify(debouncedValue)}
      <Filter setFilter={setFilter} />
      <Cards response={response} loading={loading} />
      <Pagination setPage={setPage} pagination={response.meta.pagination} />
    </>
  );
};

export default Search;
