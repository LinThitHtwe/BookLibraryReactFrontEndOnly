import axios from "axios";
import React, { useEffect, useState } from "react";

const UseFetchPages = (bookId, currentPageId, contentId) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let fetchUrl;
  if (contentId)
    fetchUrl = `api/v1/book/${bookId}/${currentPageId}/${contentId}`;
  else fetchUrl = `api/v1/book/${bookId}/${currentPageId}`;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(fetchUrl)
        .then((res) => {
          if (res.status != 200) {
            throw new Error("Network response was not ok");
          }
          return res.data;
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    };
    fetchData();
  }, [bookId, currentPageId, contentId]);
  return {
    data,
    isPending,
    error,
  };
};

export default UseFetchPages;
