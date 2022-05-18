import axios from "axios";


const REACT_APP_BACKEND_API = "http://145.239.254.41:8095";
const API_URL = REACT_APP_BACKEND_API + "/api/companies?page=1&start=0&limit=10";

const companyName = () => {
    return axios.get(API_URL);
}

export default {
    companyName
};
