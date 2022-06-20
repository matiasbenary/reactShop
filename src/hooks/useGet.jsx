import { useEffect, useState } from "react";

import axios from "axios";
import { useRecoilValue } from "recoil";

import userState from "../shared/user";
import { converPagination, converPopulate } from "../utils/objectToUri";

axios.defaults.baseURL = "https://strapiecommerce-production.up.railway.app";

const useGet = (url, populateArray) => {
  const user = useRecoilValue(userState);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const [filters, setFilters] = useState("");
  const populate = converPopulate(populateArray);

  const [page, setPage] = useState(1);

  const paginate = converPagination(page);

  const header = user ? { Authorization: `Bearer ${user.jwt}` } : {};

  const fetchData = () => {
    axios
      .get(`/api/${url}?${paginate}&${populate}&${filters}`, header)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [filters, page]);

  return { response, error, loading, setFilters, setPage };
};

export default useGet;
