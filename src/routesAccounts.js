
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
import DailyStatement from "views/TableList/DailyStatement";
import DailyCombinedStatement from "views/TableList/DailyCombinedStatement";
import CustomerStatement from "views/TableList/CustomerStatement";
import CustomerStatementCombined from "views/TableList/CustomerStatementCombined";
import WholeSaleInvoice from "views/TableList/WholeSaleInvoice";
import WholeSaleLedger from "views/TableList/WholeSaleLedger";
import WholeSaleSummaryLedger from "views/TableList/WholeSaleSummaryLedger";
import GeneralLedger from "views/TableList/GeneralLedger";
import BankCashBankSummary from "views/TableList/BankCashBankSummary";
import BankLedgerSummaryDetails from "views/TableList/BankLedgerSummaryDetails";


const dashboardRoutes = [

  {
    id:51,
    path: "/dailystatement",
    name: "daily Statement",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DailyStatement,
    layout: "/accounts",
  },
  
  {
    id:52,
    path: "/dailycombinedstatement",
    name: "Daily Combined Statement",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DailyCombinedStatement,
    layout: "/accounts",
  },
  {
    id:53,
    path: "/customerstatement",
    name: "Customer Statement",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CustomerStatement,
    layout: "/accounts",
  },
  {
    id:54,
    path: "/customerstatementcombined",
    name: "Customer Statement Combined",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CustomerStatementCombined,
    layout: "/accounts",
  },
  {
    id:55,
    path: "/wholesaleinvoice",
    name: "WholeSale Invoice",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: WholeSaleInvoice,
    layout: "/accounts",
  },
  {
    id:56,
    path: "/wholesaleledger",
    name: "Whole Sale Ledger",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: WholeSaleLedger,
    layout: "/accounts",
  },
  {
    id:57,
    path: "/wholesalesummaryledger",
    name: "Whole Sale Summary Ledger",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: WholeSaleSummaryLedger,
    layout: "/accounts",
  },
  
  {
    id:58,
    path: "/generalledger",
    name: "General Ledger",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: GeneralLedger,
    layout: "/accounts",
  },
  {
    id:59,
    path: "/BankCashBanksummary",
    name: "Bank Cash Bank Summary",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BankCashBankSummary,
    layout: "/accounts",
  },
  {
    id:60,
    path: "/bankledgersummarydetails",
    name: "Account Ledger Summary Details",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BankLedgerSummaryDetails,
    layout: "/accounts",
  },
//   {
//     id:62,
//     path: "/deliverynotes",
//     name: "Delivery Notes",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: DeliveryNotesScreen,
//     layout: "/accounts",
//   },
//   {
//     id:63,
//     path: "/deliverynotedetail",
//     name: "Delivery Note Detail",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: DeliveryNoteDetailScreen,
//     layout: "/accounts",
//   },
//   {
//     id:67,
//     path: "/goodsreceivednotes",
//     name: "GRN List",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: GRNlistScreen,
//     layout: "/accounts",
//   },
//   {
//     id:68,
//     path: "/goodsreceivednotedetail",
//     name: "GRN Detail",
//     rtlName: "قائمة الجدول",
//     icon: "content_paste",
//     component: GRNDetailScreen,
//     layout: "/accounts",
//   },

  // {
  //   id:2,
  //   path: "/productivity/dfs",
  //   name: "DFS Exec",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: DFSScreen,
  //   layout: "/accounts",
  // },
  
];

export default dashboardRoutes;
