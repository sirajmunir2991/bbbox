import Stock from "layouts/Stock.js";
import RetailSales from "layouts/RetailSales.js";

import Productivity from "layouts/Productivity.js";
import AdminSales from "layouts/adminSales.js";
import Accounts from "layouts/vouchers.js";
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
import CategoryList from "views/TableList/CategoryList";
import BrandList from "views/TableList/BrandList";
import UnitList from "views/TableList/UnitList";
import OriginsList from "views/TableList/OriginsList";
import MasterProductList from "views/TableList/MasterProductList";
import Pricing from "views/TableList/Pricing";
import CreateAccount from "views/TableList/CreateAccount";

const dashboardRoutes = [
  {
    path: "/create-account",
    name: "Create Account",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
     component: CreateAccount,
    layout: "/voucher",
  },
  {
    path: "/category-list",
    name: "Category List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CategoryList,
    layout: "/voucher",
  },
  {
    path: "/new-brand",
    name: "New Brand",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    layout: "/voucher",
  },
  {
    path: "/brand-list",
    name: "Brand ist",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BrandList,
    layout: "/voucher",
  },
  {
    path: "/new-unit",
    name: "New Unit",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductTrackScreen,
    layout: "/voucher",
  },
  {
    path: "/unit-list",
    name: "Unit List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: UnitList,
    layout: "/voucher",
  },
  {
    path: "/new-origin",
    name: "New Origin",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: StockTransferMismatchScreen,
    layout: "/voucher",
  },

  {
    path: "/origins-list",
    name: "origins List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: OriginsList,
    layout: "/voucher",
  },
  {
    path: "/new-product",
    name: "New Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: StockAdjustmentScreen,
    layout: "/voucher",
  },
  {
    path: "/master-product-list",
    name: "Master Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: MasterProductList,
    layout: "/voucher",
  },
  {
    path: "/product-list",
    name: "Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: DeliveryNotesScreen,
    layout: "/voucher",
  },
  {
    path: "/pricing",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Pricing,
    layout: "/voucher",
  },
];

export default dashboardRoutes;
