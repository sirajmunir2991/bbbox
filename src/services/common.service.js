import axios from "axios";
import authHeader from "./auth-header.js"


const REACT_APP_BACKEND_API = "http://145.239.254.41:8095/";
const API_URL = REACT_APP_BACKEND_API + "api/";

const Brands = () => {
    return axios.get(API_URL+ `brands?query=&page=1&start=0&limit=100000&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Supplier = () => {
    return axios.get(API_URL+ `suppliers?query=&page=1&start=0&limit=10000&sort=[{"property":"title","direction":"ASC"}]`, { headers: authHeader() });
}
const Origin = () => {
    return axios.get(API_URL+ `productorigins?query=&page=1&start=0&limit=100000&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Categories = () => {
    return axios.get(API_URL+ `categories?query=&page=1&start=0&limit=10000&group=[{"property":"parentCategoryTitle","direction":"ASC"}]&sort=[{"property":"parentCategoryTitle","direction":"ASC"},{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Product = (search,page) => {
    return axios.get(API_URL+ `products?query=&page=${page}&start=0&limit=10&group=[{"property":"categoryTitle","direction":"ASC"},{"property":"subCategoryTitle","direction":"ASC"}]&sort=[{"property":"categoryTitle","direction":"ASC"},{"property":"subCategoryTitle","direction":"ASC"},{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const AdjustmentType = () => {
    return axios.get(API_URL+ `stock/adjustments/types?query=&page=1&start=0&limit=1000&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Customer = () => {
    return axios.get(API_URL+ `customers?query=&page=1&start=0&limit=5000&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Transfer = () => {
    return axios.get(API_URL+ `branches?query=&page=1&start=0&limit=10&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const Account = () => {
    // return axios.get(API_URL+ `branches?query=&page=1&start=0&limit=10&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const SecondAccount = () => {
    // return axios.get(API_URL+ `branches?query=&page=1&start=0&limit=10&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const BusinessType = () => {
    // return axios.get(API_URL+ `branches?query=&page=1&start=0&limit=10&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}
const ParentCategory = () => {
    // return axios.get(API_URL+ `branches?query=&page=1&start=0&limit=10&sort=[{"property":"title","direction":"ASC"}]&filter=[{"property":"active","value":true}]`, { headers: authHeader() });
}

export default {
    Transfer,
    Brands,
    Supplier,
    Origin,
    Categories,
    Product,
    AdjustmentType,
    Customer,
    Account,
    SecondAccount,
    BusinessType,
    ParentCategory
};
