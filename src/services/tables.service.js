import axios from "axios";
// import authHeader from "./auth-header.js"

const REACT_APP_BACKEND_API = "http://145.239.254.41:8095/analysis/";
const BASE_API_URL = REACT_APP_BACKEND_API;
const API_URL = REACT_APP_BACKEND_API + "stock/";
const API_URL_SALES = REACT_APP_BACKEND_API + "sales/";
const API_URL_ACCOUNTS = REACT_APP_BACKEND_API + "accounts/";
const BASE_URL = "http://145.239.254.41:8095/";

const SWBE = (
  date = "12/17/2021",
  locationId = 3,
  categoryId = 6,
  brandId = 68,
  supplierId = 3432,
  originId = 1,
  minval = "1",
  maxval = "4",
  expfrom = "2021-02-17",
  expto = "2018-12-17",
  groupBy = "category",
  direction = "asc",
  orderby = "product"
) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `currentstock?Auth-Token=${user.Token}&criteria={"locationId":${locationId},"categoryId":${categoryId},"brandId":${brandId},"supplierId":${supplierId},"originId":${originId},"minQuantity":"${minval}","maxQuantity":"${maxval}","exprFrom":"${expfrom}","exprTo":"${expto}","tillDate":"${date}","orderBy":"${orderby}","sortDir":"${direction}","groupBy":"${groupBy}"}`;

  return axios.get(API);
};
const SWBEDownload = (date, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(
    API_URL +
      `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`
  );
};
const CSP = (
  locationId,
  categoryId,
  brandId,
  supplierId,
  originId,
  minval,
  maxval
) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `iopricing?Auth-Token=${user.Token}&criteria={"locationId":${locationId},"categoryId":${categoryId},"brandId":${brandId},"supplierId":${supplierId},"originId":${originId},"minQuantity":"${minval}","maxQuantity":"${maxval}"}`;
  return axios.get(API);
};
const CSPDownload = (date, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(
    API_URL +
      `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`
  );
};
const ABS = (categoryId, brandId, supplierId, originId, date, groupBy) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `stockcomparison?Auth-Token=${user.Token}&criteria={"categoryId":${categoryId},"brandId":${brandId},"supplierId":${supplierId},"originId":${originId},"tillDate":"${date}","groupBy":"${groupBy}"}`;
  return axios.get(API);
};
const DCS = (Date) => {
  const API =
    BASE_API_URL +
    `accounts/DailyCombinedStatement?criteria={"Date":"${Date}"}`;
  const user = JSON.parse(localStorage.getItem("user"));
  var config = {
    method: "get",
    url: API,
    headers: {
      "Auth-Token": user.Token,
    },
  };

  return axios(config);
};

const WSL = (fromDate, toDate) => {
  const API =
    BASE_API_URL +
    `sales/WholesaleLedger?criteria={"fromDate":"${fromDate}", "toDate":"${toDate}"}`;
  const user = JSON.parse(localStorage.getItem("user"));
  var config = {
    method: "get",
    url: API,
    headers: {
      "Auth-Token": user.Token,
    },
  };

  return axios(config);
};

const BCBS = (date) => {
  const API =
    BASE_API_URL +
    `/accounts/DailyCombinedSummaryStatement?criteria={"Date":"${date}"}`;
  const user = JSON.parse(localStorage.getItem("user"));
  var config = {
    method: "get",
    url: API,
    headers: {
      "Auth-Token": user.Token,
    },
  };

  return axios(config);
};

const ABSDownload = (date, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(
    API_URL +
      `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`
  );
};
const ProductTrack = (from, to, locationId, productId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `producttrack?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","locationId":${locationId},"productId":${productId}}`;
  return axios.get(API);
};
const StockTransferMismatch = (from, to) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `transfermismatches?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}"}`;
  return axios.get(API);
};
const StockTransfer = (from, to, fromBranchId, toBranchId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `transfers?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","fromBranchId":${fromBranchId},"toBranchId":${toBranchId}}`;
  return axios.get(API);
};
const ProductTrackDownload = (date, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(
    API_URL +
      `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`
  );
};
const SID = (ref) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `transferdetail?Auth-Token=${user.Token}&criteria={"referenceCode":"${ref}"}`;

  return axios.get(API);
};
const StockAdjustment = (from, to, locationId, adjustmentId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `adjustments?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","locationId":${locationId},"typeId":${adjustmentId}}`;

  return axios.get(API);
};
const AdjustmentDetails = (ref) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `adjustmentdetail?Auth-Token=${user.Token}&criteria={"referenceCode":"${ref}"}`;

  return axios.get(API);
};
const DeliveryNotes = (from, to) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `deliverynotes?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}"}`;

  return axios.get(API);
};
const DeliveryNotesDetails = (ref) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `deliverynotedetail?Auth-Token=${user.Token}&criteria={"referenceCode":"${ref}"}`;

  return axios.get(API);
};
const GRDList = (from, to) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `goodsreceivednotes?Auth-Token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}"}`;

  return axios.get(API);
};
const GRNDetail = (ref) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `goodsreceivednotedetail?Auth-Token=${user.Token}&criteria={"referenceCode":"${ref}"}`;

  return axios.get(API);
};
const InvoiceSummary = (from, to, customerID, group) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salesIndex?Auth-token=${
      user.Token
    }&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"GroupingType":${parseInt(
      group
    )},"reportType":"1"}`;

  return axios.get(API);
};
const InvoiceDetail = (from, to, customerID, group) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salesIndex?Auth-token=${
      user.Token
    }&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"GroupingType":${parseInt(
      group
    )},"reportType":"2"}`;

  return axios.get(API);
};
const ByMonth = (from, to, customerID, group) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salessummary?Auth-token=${
      user.Token
    }&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"GroupingType":${parseInt(
      group
    )},"saleGroupOptions":"1"}`;

  return axios.get(API);
};
const ByYear = (from, to, customerID, group) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salessummary?Auth-token=${
      user.Token
    }&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"GroupingType":${parseInt(
      group
    )},"saleGroupOptions":"2"}`;

  return axios.get(API);
};
const ByCustomer = (from, to, customerID, group) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salessummary?Auth-token=${
      user.Token
    }&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"GroupingType":${parseInt(
      group
    )},"saleGroupOptions":"3"}`;

  return axios.get(API);
};
const PartySummary = (date) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `partysummary?Auth-token=${user.Token}&criteria={"date":"${date}"}`;

  return axios.get(API);
};
const SRC = (from, to, customerID, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `SaleRatesByCustomer?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"supplierId":${supplierID}}`;

  return axios.get(API);
};
const IMSCUST = (from, to, customerID, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomer?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","customerId":${customerID},"supplierId":${supplierID}}`;

  return axios.get(API);
};
const IMSCUSTSUM = (from, to, locationId, monthseperated) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomerRetailSummary?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","locationId":${locationId},"monthseperated":"${monthseperated}"}`;

  return axios.get(API);
};
const IMSCHANNEL = (from, to, locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomerType?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","locationId":${locationId},"supplierId":${supplierID}}`;

  return axios.get(API);
};
const IMSSupplier = (from, to, suppPrice, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `imssupplier?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","bySupplierPrice":${suppPrice},"supplierId":${supplierID}}`;

  return axios.get(API);
};
const IMSProduct = (from, to, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsProduct?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID}}`;

  return axios.get(API);
};
const IMSBYCUSTCHANNELADMIN = (from, to, supplierID, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomerType?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID},"locationId":${locationId}}`;

  return axios.get(API);
};
const IMSBYCUSTSUMADMIN = (from, to, supplierID, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomerSummary?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID},"locationId":${locationId}}`;

  return axios.get(API);
};
const IMSBYCUSTADMIN = (from, to, supplierID, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomer?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID},"locationId":${locationId}}`;

  return axios.get(API);
};
const BranchCategory = (locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `LastYearSalesComparison?Auth-token=${user.Token}&criteria={"supplierId":${supplierID},"branchId":${locationId},"comparisonType":"1"}`;

  return axios.get(API);
};
const BranchSummary = (locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `LastYearSalesComparison?Auth-token=${user.Token}&criteria={"supplierId":${supplierID},"branchId":${locationId},"comparisonType":"2"}`;

  return axios.get(API);
};
const keysummary = (locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `LastYearSalesComparison?Auth-token=${user.Token}&criteria={"supplierId":${supplierID},"branchId":${locationId},"comparisonType":"3"}`;

  return axios.get(API);
};
const keydetail = (locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `LastYearSalesComparison?Auth-token=${user.Token}&criteria={"supplierId":${supplierID},"branchId":${locationId},"comparisonType":"4"}`;

  return axios.get(API);
};
const BranchProduct = (locationId, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `LastYearSalesComparison?Auth-token=${user.Token}&criteria={"supplierId":${supplierID},"branchId":${locationId},"comparisonType":"5"}`;

  return axios.get(API);
};
const StockDays = (from, to, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `StockDays?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID}}`;

  return axios.get(API);
};
const AllStockSales = (from, to, supplierID) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `StockAndSales?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID}}`;

  return axios.get(API);
};
const SalesByCustomer = (from, to, supplierID, customerID, type) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `SalesByCutomer?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supplierID},"customerId":${customerID},"reportType":${type}}`;

  return axios.get(API);
};
const SalesComparison = (from, to, secondfrom, secondto) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `periodiccomparison?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","SecondFromDate":"${secondfrom}","SecondToData":"${secondto}"}`;

  return axios.get(API);
};
const Sales = (from, to) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `salescomparison?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}"}`;

  return axios.get(API);
};

const ImsCustomerRetailPNLSummary = (from, to, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `ImsCustomerRetailPNLSummary?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","locationId":${locationId}}`;

  return axios.get(API);
};
const khyberByBranchPLS = (from, to, reportType) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_SALES +
    `bybranchpls?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","reportType":${reportType}}`;

  return axios.get(API);
};
const stockValueVendor = (to, locationId) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `valuebyvendor?Auth-token=${user.Token}&criteria={"ClosingDate":"${to}","locationId":${locationId}}`;

  return axios.get(API);
};
const stockValueProductLocation = (to, supp) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL +
    `ValueByProductAndLocation?Auth-token=${user.Token}&criteria={"ClosingDate":"${to}","supplierId":${supp}}`;

  return axios.get(API);
};
const companiesProfitWise = (from, to, supp) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const API =
    API_URL_ACCOUNTS +
    `pnlbyvendors?Auth-token=${user.Token}&criteria={"fromDate":"${from}","toDate":"${to}","supplierId":${supp}}`;

  return axios.get(API);
};

const categoryList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "http://145.239.254.41:8095/api/categories?start=0&page=1&limit=25&parentsOnly=null&parentId=null",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
  //
  // const API =
  //   BASE_URL +
  //   `api/categories?Auth-Token=${user.Token}&start=0&page=1&limit=25`;
  // var config = {
  //   method: "get",
  //   url: API,
  //   headers: {
  //     "Auth-Token": user.Token,
  //   },
  // };
  // const data = await axios(config);
  // console.log("DSadhnskjad", data);
};

const newBrand = async ({ title, date, description, shared, active }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var formdata = new FormData();
  formdata.append("title", title);
  formdata.append("date", date);
  formdata.append("description", description);
  formdata.append("shared", shared);
  formdata.append("active", active);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch("http://145.239.254.41:8095/api/brands", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log("Dsadsa", result))
    .catch((error) => console.log("error", error));
  // const brandData = { title, date, description, shared, active };
  // const API = BASE_URL + `/api/brands`;
  // const user = JSON.parse(localStorage.getItem("user"));
  // var config = {
  //   method: "post",
  //   url: API,
  //   headers: {
  //     "Auth-Token": user.Token,
  //   },
  //   data: brandData,
  // };
  // const data = axios(config);
  // console.log("Dshdikwujew", data);
  // return data;
};

const brandList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "http://145.239.254.41:8095/api/brands?start=0&page=1&limit=25",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
  // const API = BASE_URL + `api/brands?start=0&page=1&limit=25`;
  // const user = JSON.parse(localStorage.getItem("user"));
  // var config = {
  //   method: "get",
  //   url: API,
  //   headers: {
  //     "Auth-Token": user.Token,
  //   },
  // };
  // return axios(config);
};

const newUnit = async ({ title, description, date, shared, active }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var formdata = new FormData();
  formdata.append("title", title);
  formdata.append("date", date);
  formdata.append("description", description);
  formdata.append("shared", shared);
  formdata.append("active", active);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch("http://145.239.254.41:8095/api/units", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

const unitList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "http://145.239.254.41:8095/api/units?start=0&page=1&limit=25",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

const newOrigin = async ({ title, description, date, shared, active }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var formdata = new FormData();
  formdata.append("title", title);
  formdata.append("date", date);
  formdata.append("description", description);
  formdata.append("shared", shared);
  formdata.append("active", active);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return fetch("http://145.239.254.41:8095/api/productorigins", requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

const originList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "http://145.239.254.41:8095/api/productorigins?start=0&page=1&limit=25",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
  // const API = BASE_URL + `api/brands?start=0&page=1&limit=25`;
  // const user = JSON.parse(localStorage.getItem("user"));
  // var config = {
  //   method: "get",
  //   url: API,
  //   headers: {
  //     "Auth-Token": user.Token,
  //   },
  // };
  // return axios(config);
};

const masterProductList = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  var myHeaders = new Headers();
  myHeaders.append("Auth-Token", user.Token);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "http://145.239.254.41:8095/api/products?masterList=true&page=1&start=0&limit=25",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
};

// const SIDDownload = (date, locationId) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     return axios.get(API_URL + `openingstockdownload?Auth-Token=${user.Token}&criteria={"openingDate":"${date}","locationId":${locationId}}`);
// }

export default {
  masterProductList,
  newUnit,
  unitList,
  categoryList,
  newOrigin,
  originList,
  newBrand,
  brandList,
  SWBE,
  SWBEDownload,
  CSP,
  CSPDownload,
  ABS,
  DCS,
  WSL,
  BCBS,
  ABSDownload,
  ProductTrack,
  ProductTrackDownload,
  SID,
  StockAdjustment,
  AdjustmentDetails,
  DeliveryNotes,
  DeliveryNotesDetails,
  DeliveryNotesDetails,
  GRDList,
  GRNDetail,
  StockTransferMismatch,
  StockTransfer,
  InvoiceSummary,
  InvoiceDetail,
  ByMonth,
  ByYear,
  ByCustomer,
  PartySummary,
  SRC,
  IMSCUST,
  IMSCUSTSUM,
  IMSCHANNEL,
  IMSSupplier,
  IMSProduct,
  IMSBYCUSTCHANNELADMIN,
  IMSBYCUSTSUMADMIN,
  IMSBYCUSTADMIN,
  BranchCategory,
  BranchProduct,
  BranchSummary,
  keydetail,
  keysummary,
  StockDays,
  AllStockSales,
  SalesByCustomer,
  SalesComparison,
  Sales,
  ImsCustomerRetailPNLSummary,
  khyberByBranchPLS,
  stockValueVendor,
  stockValueProductLocation,
  companiesProfitWise,
};
