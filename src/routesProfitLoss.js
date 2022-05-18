
import {imsByCustomer,
    imsByCustomerPnL,
    stockValueVendor,
    stockValueProductLocation,
    companiesProfitWise,
    monthlyData,
    imsByProduct,
    khyberByBranchPLS} from "views/TableList/ProfitLossScreens";




const dashboardRoutes = [

  {
    id:42,
    path: "/imsbycustomer",
    name: "IMS BY CUSTOMER",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByCustomer,
    layout: "/profitloss",
  },
 
  {
    id:43,
    path: "/imsbyproduct",
    name: "IMS by Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByProduct,
    layout: "/profitloss",
  },
  {
    id:44,
    path: "/imsbycustpnl",
    name: "IMS by Customer PnL",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByCustomerPnL,
    layout: "/profitloss",
  },
 
  {
    id:45,
    path: "/kbplstotal",
    name: "Khyber by Branch PLS and total",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: khyberByBranchPLS,
    layout: "/profitloss",
  },
  {
    id:46,
    path: "/svbyvendor",
    name: "Stock Value by Vendor",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: stockValueVendor,
    layout: "/profitloss",
  },
 
  {
    id:47,
    path: "/svbyproductlocation",
    name: "Stock Value by Product and Location",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: stockValueProductLocation,
    layout: "/profitloss",
  },
  {
    id:48,
    path: "/companiesprofitwise",
    name: "Companies Profit Wise",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: companiesProfitWise,
    layout: "/profitloss",
  },
 
  {
    id:49,
    path: "/monthlydata",
    name: "Monthly Data",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: monthlyData,
    layout: "/profitloss",
  },
  
];

export default dashboardRoutes;
