import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
  
};



export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return <Component />;
};



// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const storeUser = (data) => {
//   localStorage.setItem(
//     "user",
//     JSON.stringify({
//       username: data.user.username,
//       jwt: data.jwt,
//     })
//   );
// };

// export const userData = () => {
//   const stringifiedUser = localStorage.getItem("user") || '""';
//   return userObject = JSON.parse(stringifiedUser || {});
//  // Access the jwt property and return it
// };

// export const Protector = ({ Component }) => {
//   const navigate = useNavigate();
//   const jwtToken = userData();

//   useEffect(() => {
//     if (!jwtToken) {
//       navigate("/login");
//     } else {
//       // Make the Axios request with the token inside useEffect
//       const fetchData = async () => {

//         try {
//           const response = await axios.get('http://localhost:1337/posts', {
//             headers: {
//               Authorization: `Bearer ${jwtToken}`,
//             },
//           });
//           console.log('Data: ', response.data);
//         } catch (error) {
//           console.log('An error occurred:', error.response);
//         }
//       };

//       fetchData();
//     }
//   }, [navigate, jwtToken]);

//   return <Component />;
// };
