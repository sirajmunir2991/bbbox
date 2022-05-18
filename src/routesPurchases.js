
import TableList from "views/TableList/TableList.js";
import DFSScreen from "views/TableList/DFSScreen";
import SwbeScreen from "views/TableList/SwbeScreen";
import CspScreen from "views/TableList/CspScreen";
import AbsScreen from "views/TableList/AbsScreen";
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
    id:1,
    path: "/opening-stock",
    name: "Purchase Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/purchase",
  },
 
  {
    id:2,
    path: "/dfs",
    name: "Purchase Detail",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DFSScreen,
    layout: "/productivity",
  },
  
];

export default dashboardRoutes;
