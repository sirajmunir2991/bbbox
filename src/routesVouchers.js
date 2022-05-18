import Stock from "layouts/Stock.js";
import RetailSales from "layouts/RetailSales.js";

import Productivity from "layouts/Productivity.js";
import AdminSales from "layouts/adminSales.js";
import Accounts from "layouts/Accounts.js";
import TableList from "views/TableList/TableList.js";
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

const dashboardRoutes = [
  {
    id: 61,
    path: "/new-category",
    name: "New Category",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/voucher",
  },
  {
    id: 62,
    path: "/category-list",
    name: "Category List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SwbeScreen,
    layout: "/voucher",
  },
  {
    id: 63,
    path: "/new-brand",
    name: "Cost and Sales Prices",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CspScreen,
    layout: "/voucher",
  },
  {
    id: 64,
    path: "/brand-list",
    name: "All Branches Stock",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AbsScreen,
    layout: "/voucher",
  },
  {
    id: 65,
    path: "/new-unit",
    name: "New Unit",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductTrackScreen,
    layout: "/voucher",
  },
  {
    id: 66,
    path: "/unit-list",
    name: "Unit List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferScreen,
    layout: "/voucher",
  },
  {
    id: 67,
    path: "/new-origin",
    name: "New Origin",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferMismatchScreen,
    layout: "/voucher",
  },

  {
    id: 68,
    path: "/origins-list",
    name: "origins List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SIDScreen,
    layout: "/voucher",
  },
  {
    id: 69,
    path: "/new-product",
    name: "New Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockAdjustmentScreen,
    layout: "/voucher",
  },
  {
    id: 70,
    path: "/master-product-list",
    name: "Master Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: AdjDetailScreen,
    layout: "/voucher",
  },
  {
    id: 71,
    path: "/product-list",
    name: "Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DeliveryNotesScreen,
    layout: "/voucher",
  },
  {
    id: 72,
    path: "/pricing",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DeliveryNoteDetailScreen,
    layout: "/voucher",
  },
];

export default dashboardRoutes;
