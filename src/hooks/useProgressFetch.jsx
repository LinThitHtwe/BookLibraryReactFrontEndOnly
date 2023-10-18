// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const UseProgressFetch = (userId) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = () => {
//       axios
//         .get(`/api/v1/progressingBook/${userId}`)
//         .then((res) => {
//           setData(res.data);
//           setIsPending(false);
//           setError(null);
//           console.log(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     fetchData();
//   }, [userId]);
//   return {
//     data,
//     isPending,
//     error,
//   };
// };

// export default UseProgressFetch;
