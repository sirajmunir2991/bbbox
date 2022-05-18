
import Sales from "views/TableList/SalesScreen";
import SalesComparison from "views/TableList/SalesComparisonScreen";
import SalesByCustomer from "views/TableList/SalesByCustomer";
import AllStockSales from "views/TableList/AllStockSales";
import StockDays from "views/TableList/StockDays";
import BranchandBrandCtegoryScreen from "views/TableList/BranchandBrandCtegoryScreen";
import BranchSummary from "views/TableList/BranchSummary";
import KeySummary from "views/TableList/KeySummary";
import KeyDetail from "views/TableList/KeyDetail";
import BranchProduct from "views/TableList/BranchProduct";
import {imsByCustomer,imsByCustomerSummary,imsByCustomerChannel,imsByProduct,imsBySupplier} from "views/TableList/IMS";



const dashboardRoutes = [

  {
    id:27,
    path: "/sales",
    name: "Sales",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Sales,
    layout: "/adminsales",
  },
  
  {
    id:28,
    path: "/salescomparison",
    name: "Sales Comparison",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SalesComparison,
    layout: "/adminsales",
  },
  {
    id:29,
    path: "/salecustomer",
    name: "Sales By Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SalesByCustomer,
    layout: "/adminsales",
  },
  {
    id:30,
    path: "/allstocksales",
    name: "All Stock & Sales",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AllStockSales,
    layout: "/adminsales",
  },
  {
    id:31,
    path: "/stockdays",
    name: "Stock Days",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockDays,
    layout: "/adminsales",
  },
  {
    id:32,
    path: "/branchandbrandcategory",
    name: "Branch And Brand Category",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BranchandBrandCtegoryScreen,
    layout: "/adminsales",
  },
  
  {
    id:33,
    path: "/branchsummary",
    name: "Brand Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BranchSummary,
    layout: "/adminsales",
  },
  {
    id:34,
    path: "/keysummary",
    name: "KeyAccounts Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: KeySummary,
    layout: "/adminsales",
  },
  {
    id:35,
    path: "/keydetail",
    name: "KeyAccounts Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: KeyDetail,
    layout: "/adminsales",
  },
  {
    id:36,
    path: "/branchproduct",
    name: "Branch & Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BranchProduct,
    layout: "/adminsales",
  },
  {
    id:37,
    path: "/imsbycustomer",
    name: "IMS by Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByCustomer,
    layout: "/adminsales",
  },
  {
    id:38,
    path: "/imsbycustomersummary",
    name: "IMS by Customer (Summary)",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByCustomerSummary,
    layout: "/adminsales",
  },
  
  {
    id:39,
    path: "/imsbycustomerbychannel",
    name: "IMS by Customer By Channel",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByCustomerChannel,
    layout: "/adminsales",
  },
  {
    id:40,
    path: "/imsbyproduct",
    name: "IMS by Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsByProduct,
    layout: "/adminsales",
  },
  {
    id:41,
    path: "/imsbysupplier",
    name: "IMS by Supplier",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: imsBySupplier,
    layout: "/adminsales",
  },
  
  
];

export default dashboardRoutes;
