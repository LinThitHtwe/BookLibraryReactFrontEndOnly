import axios from "axios";
import React, { useEffect, useState } from "react";

const UseFetch = (fetchUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(fetchUrl)
        .then((res) => {
          setData(res.data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [fetchUrl]);
  return {
    data,
    isPending,
    error,
  };
};

export default UseFetch;
