
import TableList from "views/TableList/TableList.js";
import DFSScreen from "views/TableList/DFSScreen";
import SwbeScreen from "views/TableList/SwbeScreen";
import CspScreen from "views/TableList/CspScreen";
import AbsScreen from "views/TableList/AbsScreen";
import SRCScreen from "views/TableList/SRCScreen";
import InvoiceSummaryScreen from "views/TableList/InvoiceSummaryScreen";
import InvoiceDetailScreen from "views/TableList/InvoiceDetailScreen";
import ByMonthScreen from "views/TableList/ByMonthScreen";
import ByYearScreen from "views/TableList/ByYearScreen";
import ByCustomerScreen from "views/TableList/ByCustomerScreen";
import PartySummaryScreen from "views/TableList/PartySummaryScreen";
import IMSCustScreen from "views/TableList/IMSCustScreen";
import IMSCustSummaryScreen from "views/TableList/IMSCustSummaryScreen";
import IMSChannelScreen from "views/TableList/IMSChannelScreen";
import ProductTrackScreen from "views/TableList/ProductTrackScreen";
import SIDScreen from "views/TableList/SIDScreen";
import StockAdjustmentScreen from "views/TableList/StockAdjustmentScreen";
import AdjDetailScreen from "views/TableList/AdjDetailScreen";
import DeliveryNotesScreen from "views/TableList/DeliveryNotesScreen";
import DeliveryNoteDetailScreen from "views/TableList/DeliveryNoteDetailScreen";
import GRNlistScreen from "views/TableList/GRNlistScreen";
import GRNDetailScreen from "views/TableList/GRNDetailScreen";
import data from "services/dummy-data";


const dashboardRoutes = [

  {
    path: "/",
    name: "Sales Index",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/salesindex",
  },
  
  {
    path: "/",
    name: "Sales Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SwbeScreen,
    layout: "/salessummary",
  },
  {
    path: "/",
    name: "General",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CspScreen,
    layout: "/general",
  },
  {
    path: "/",
    name: "IMS by Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AbsScreen,
    layout: "/ims",
  },
  
  
];

export default dashboardRoutes;

export const salesIndexRoutes = [

  {
    id:17,
    path: "/invoice-summary",
    name: "Invoice Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: InvoiceSummaryScreen,
    layout: "/salesindex",
  },
  
  {
    id:18,
    path: "/invoice-detail",
    name: "Invoice Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: InvoiceDetailScreen,
    layout: "/salesindex",
  },
  
  
];
export const salesSummary = [

  {
    id:19,
    path: "/bymonth",
    name: "By Month",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ByMonthScreen,
    layout: "/salessummary",
  },
  
  {
    id:20,
    path: "/byyear",
    name: "By Year",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ByYearScreen,
    layout: "/salessummary",
  },
  {
    id:21,
    path: "/bycustomer",
    name: "By Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ByCustomerScreen,
    layout: "/salessummary",
  },
  {
    id:22,
    path: "/partysummary",
    name: "Party Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PartySummaryScreen,
    layout: "/salessummary",
  },
  
  
];
export const general = [

  {
    id: 23,
    path: "/salesratebycustomer",
    name: "Sales Rates By Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SRCScreen,
    layout: "/general",
  },
  
];
export const imsbyCustomer = [

  {
    id: 24,
    path: "/imsbycustomer",
    name: "IMS by Customer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: IMSCustScreen,
    layout: "/ims",
  },
  
  {
    id: 25,
    path: "/imsbycustomersummary",
    name: "IMS by Customer Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: IMSCustSummaryScreen,
    layout: "/ims",
  },
  {
    id: 26,
    path: "/imsbychannel",
    name: "IMS by Channel",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: IMSChannelScreen,
    layout: "/ims",
  },
  
  
];



