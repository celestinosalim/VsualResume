// import jwtDecode from "jwt-decode";

/* ---------- ACTION CREATORS ------------- */

// const logout = () => {
//   delete localStorage.authToken;
//   return { type: LOGOUT };
// };

/* ---------- THUNK CREATORS ------------- */

// const CreateToken = () => {
//   return dispatch => {
//     fetch(`http://localhost:3001/api/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         user: {
//           username: props.username,
//           email: props.email,
//           password: props.password,
//           avatar: props.avatar
//         }
//       })
//     })
//       .then(res => res.json())
//       .then(console.log);
//   };
// };
