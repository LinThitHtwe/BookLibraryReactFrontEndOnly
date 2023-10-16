import axios from "axios";
import { useEffect, useState } from "react";

const useBooksFetch = (fetchURL) => {
  console.log("fetch");
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("/api/v1/booksList")
        .then((res) => {
          if (!res.status === 200) {
            throw new Error("Network response was not ok");
          }
          return res.data;
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    };

    fetchData();
  }, [fetchURL]);

  console.log("My data---" + data);

  return {
    data,
    isPending,
    error,
  };
};

export default useBooksFetch;
