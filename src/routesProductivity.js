
import TableList from "views/TableList/TableList.js";
import DFSScreen from "views/TableList/DFSScreen";
import DFSPWScreen from "views/TableList/DFSPWScreen";
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
    id:12,
    path: "/dfspw",
    name: "DSF wise Product wise",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DFSPWScreen,
    layout: "/productivity",
  },
 
  {
    id:2,
    path: "/dfs",
    name: "DSF Exec",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DFSScreen,
    layout: "/productivity",
  },
  
];

export default dashboardRoutes;
