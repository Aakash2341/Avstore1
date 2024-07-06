import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setdata] = useState();
  useEffect(() => {
    makeappcall();
  }, [endpoint]);

  const makeappcall = async () => {
    const res = await fetchDataFromApi(endpoint);
    setdata(res);
  };
  return { data };
};

export default useFetch;
