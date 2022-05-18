import axios from "axios";
import authHeader from "./auth-header.js"


const REACT_APP_BACKEND_API = "http://145.239.254.41:8095/";
const API_URL = REACT_APP_BACKEND_API + "/api/locations?page=1&start=0&limit=1000";

const Location = () => {
    return axios.get(API_URL, { headers: authHeader() });
}

export default {
    Location
};
