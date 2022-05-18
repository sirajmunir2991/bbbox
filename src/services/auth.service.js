import axios from "axios";
  // import authHeader from "./auth-header";


// const { REACT_APP_BACKEND_API } = process.env;
const API_URL = "http://145.239.254.41:8095/api/loginsessions";


const login = (loginName, password,companyId) => {
  return axios
    .post(API_URL , {
      loginName,
      password,
      companyId
    })
    .then((response) => {
      console.log(response.data.Data);
      if (response.data.Data.Token) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.Data)
        );
        }
      //   localStorage.setItem(
      //     "UserId",
      //     JSON.stringify(response.data.result.userid),
      //   );
      //   localStorage.setItem(
      //     "Email",
      //     JSON.stringify(response.data.result.email),
      //   );
      // }

      return response.data;
    });
};

// const verificationResend = () => {
//   return axios.get(API_URL + "resendverificationcode", { headers: authHeader() });
// }


// const resetPassword = (OldPassword, NewPassword) => {
//   return axios.post(API_URL + "resetpassword", {
//     OldPassword, NewPassword
//   }, { headers: authHeader() });

// }
// const verifyEmailCode = (code) => {
//   return axios.post(API_URL + "verifyemailcode", {
//     code
//   },
//     { headers: authHeader() }
//   ).then((response) => {
//     if (response.data.result.token) {
//       localStorage.setItem(
//         "user",
//         JSON.stringify(response.data.result.token)
//       );
//     }
//     return response.data;
//   });
// }
// const validateForogtPasswordLink = (userid,code) => {
//   return axios.post(API_URL + "validateforogtpasswordlink", {
//     userid,
//     code
//   });
// }
// const updateNewPassword = (UserId,NewPassword) => {
//   return axios.post(API_URL + "updatenewpassword", {
//     UserId,
//     NewPassword
//   });
// }
// const sendForgetPasswordEmail = (email) => {
//   return axios.get(API_URL + `sendforgetpasswordemail?email=${email}`
//   )
// };

const logout = () => {
  localStorage.removeItem("user");
  // localStorage.removeItem("profileImage");
  // localStorage.removeItem("UserId");
  // localStorage.removeItem("Email");
};

export default {
  login,
  logout,
  // verificationResend,
  // verifyEmailCode,
  // resetPassword,
  // sendForgetPasswordEmail,
  // validateForogtPasswordLink,
  // updateNewPassword
};
