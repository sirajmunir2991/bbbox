import axios from "axios";
// import authHeader from "./auth-header.js"


const REACT_APP_BACKEND_API = "http://localhost:4419/";
const API_URL = REACT_APP_BACKEND_API + "/analysis/productivity/";

const DfsExecution = (from, to) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return axios.get(API_URL + `dsfexecution?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}"}`);
}
// const OpeningStockDownload = (date, locationId) => {
//     // const user = JSON.parse(localStorage.getItem("user"));
//     // return axios.get(API_URL + `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`);
// }

export default {
    DfsExecution,
    // OpeningStockDownload
};
