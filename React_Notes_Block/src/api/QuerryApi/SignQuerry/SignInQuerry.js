// import React, { useState } from 'react';
// import { useQuery } from 'react-query';

// const fetchAllUsers = async () => {
//   const myDb = 'http://localhost:3001/users';
//   const [us, setUs] = useState(false);

//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const resOk = await res.json();
//     console.log(`resOk`, resOk);
//     return resOk;
//   } catch (err) {
//     throw new Error(`Smth wrng`);
//   } finally {
//     setUs(false);
//   }
// };

// const { data, isFetching } = useQuery(
//   'name',
//   fetchAllUsers,
//   {
//     enabled: us,
//   },
//   { refreshInterval: 3000 }
// );
