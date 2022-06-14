import { useEffect, useState } from "react";

import axios from "axios";

axios.defaults.baseURL = "https://strapiecommerce-production.up.railway.app";

const useGet = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  console.log("hola");
  const fetchData = () => {
    axios
      .get(`/api/${url}`)
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
  }, []);

  return { response, error, loading };
};

export default useGet;
