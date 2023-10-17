import React from "react";
import UseFetchPages from "../hooks/useFetchPages";
const BookPage = ({ id }) => {
  const { data, isPending, error } = UseFetchPages(id, 1);
  if (data) {
    const base64Content = JSON.stringify(data?.contents[0]?.content);
    console.log(base64Content);
  }

  return <div>Hello</div>;
};

export default BookPage;
