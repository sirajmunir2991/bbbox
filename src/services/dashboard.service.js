import axios from "axios";
import authHeader from "./auth-header.js"


const REACT_APP_BACKEND_API = "http://145.239.254.41:8095/";
const API_URL = REACT_APP_BACKEND_API + "api/";

const Dashboard = (id) => {
    return axios.get(API_URL+ `locations/${id}/ActivityStats`, { headers: authHeader() });
}


export default {
    Dashboard,
};
