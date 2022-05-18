
import TableList from "views/TableList/TableList.js";
import DFSScreen from "views/TableList/DFSScreen";
import SwbeScreen from "views/TableList/SwbeScreen";
import CspScreen from "views/TableList/CspScreen";
import AbsScreen from "views/TableList/AbsScreen";
import ProductTrackScreen from "views/TableList/ProductTrackScreen";
import SIDScreen from "views/TableList/SIDScreen";
import StockAdjustmentScreen from "views/TableList/StockAdjustmentScreen";
import StockTransferMismatchScreen from "views/TableList/StockTransferMismatchScreen";
import StockTransferScreen from "views/TableList/StockTransferScreen";
import AdjDetailScreen from "views/TableList/AdjDetailScreen";
import DeliveryNotesScreen from "views/TableList/DeliveryNotesScreen";
import DeliveryNoteDetailScreen from "views/TableList/DeliveryNoteDetailScreen";
import GRNlistScreen from "views/TableList/GRNlistScreen";
import GRNDetailScreen from "views/TableList/GRNDetailScreen";
import data from "services/dummy-data";
import routesRetail from "routesRetail.js";

const dashboardRoutes = [

  {
    id:1,
    path: "/opening-stock",
    name: "Opening Stock",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/stock",
  },
  
  {
    id:3,
    path: "/swbe",
    name: "Stock With Batch And Expiry",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SwbeScreen,
    layout: "/stock",
  },
  {
    id:4,
    path: "/csp",
    name: "Cost and Sales Prices",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CspScreen,
    layout: "/stock",
  },
  {
    id:5,
    path: "/abs",
    name: "All Branches Stock",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AbsScreen,
    layout: "/stock",
  },
  {
    id:6,
    path: "/product-track",
    name: "Product Track",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductTrackScreen,
    layout: "/stock",
  },
  {
    id:16,
    path: "/stock-transfer",
    name: "Stock Transfer",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferScreen,
    layout: "/stock",
  },
  {
    id:15,
    path: "/stock-transfer-mismatch",
    name: "Stock Transfer Mismatch",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferMismatchScreen,
    layout: "/stock",
  },
  
  {
    id:7,
    path: "/transferdetail",
    name: "Shifting Invoice Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SIDScreen,
    layout: "/stock",
  },
  {
    id:8,
    path: "/adjustments",
    name: "Stock Adjustments",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockAdjustmentScreen,
    layout: "/stock",
  },
  {
    id:9,
    path: "/adjustmentdetail",
    name: "Adjustment Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AdjDetailScreen,
    layout: "/stock",
  },
  {
    id:10,
    path: "/deliverynotes",
    name: "Delivery Notes",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DeliveryNotesScreen,
    layout: "/stock",
  },
  {
    id:11,
    path: "/deliverynotedetail",
    name: "Delivery Note Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DeliveryNoteDetailScreen,
    layout: "/stock",
  },
  {
    id:12,
    path: "/goodsreceivednotes",
    name: "GRN List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: GRNlistScreen,
    layout: "/stock",
  },
  {
    id:13,
    path: "/goodsreceivednotedetail",
    name: "GRN Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: GRNDetailScreen,
    layout: "/stock",
  },
  ...routesRetail
  // {
  //   id:2,
  //   path: "/productivity/dfs",
  //   name: "DFS Exec",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: DFSScreen,
  //   layout: "/stock",
  // },
  
];

export default dashboardRoutes;
