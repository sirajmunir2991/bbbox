import axios from "axios";
// import authHeader from "./auth-header.js"


const REACT_APP_BACKEND_API = "http://145.239.254.41:8095/";
const API_URL = REACT_APP_BACKEND_API + "/analysis/stock/";

const OpeningStock = (date, locationId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return axios.get(API_URL + `openingstock?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`);
}
const OpeningStockDownload = (date, locationId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return axios.get(API_URL + `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`);
}

export default {
    OpeningStock,
    OpeningStockDownload
};
