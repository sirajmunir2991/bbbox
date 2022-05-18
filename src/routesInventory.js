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
import CategoryList from "views/TableList/CategoryList";
import BrandList from "views/TableList/BrandList";
import UnitList from "views/TableList/UnitList";
import OriginsList from "views/TableList/OriginsList";
import MasterProductList from "views/TableList/MasterProductList";
import Pricing from "views/TableList/Pricing";
import NewProduct from "views/TableList/NewProduct"
import NewPurchaseOrder from "views/TableList/NewPurchaseOrder"

const dashboardRoutes = [
  {
    id: 61,
    path: "/new-category",
    name: "New Category",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: TableList,
    layout: "/inventory",
  },
  {
    id: 62,
    path: "/category-list",
    name: "Category List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: NewPurchaseOrder,
    component: CategoryList,
    layout: "/inventory",
  },
  {
    id: 63,
    path: "/new-brand",
    name: "New Brand",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: CspScreen,
    layout: "/inventory",
  },
  {
    id: 64,
    path: "/brand-list",
    name: "Brand ist",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BrandList,
    layout: "/inventory",
  },
  {
    id: 65,
    path: "/new-unit",
    name: "New Unit",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductTrackScreen,
    layout: "/inventory",
  },
  {
    id: 66,
    path: "/unit-list",
    name: "Unit List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: UnitList,
    layout: "/inventory",
  },
  {
    id: 67,
    path: "/new-origin",
    name: "New Origin",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: StockTransferMismatchScreen,
    layout: "/inventory",
  },

  {
    id: 68,
    path: "/origins-list",
    name: "origins List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: OriginsList,
    layout: "/inventory",
  },
  {
    id: 69,
    path: "/new-product",
    name: "New Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: StockAdjustmentScreen,
    layout: "/inventory",
  },
  {
    id: 70,
    path: "/master-product-list",
    name: "Master Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: MasterProductList,
    layout: "/inventory",
  },
  {
    id: 71,
    path: "/product-list",
    name: "Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    // component: DeliveryNotesScreen,
    layout: "/inventory",
  },
  {
    id: 72,
    path: "/pricing",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Pricing,
    layout: "/inventory",
  },
  {
    id: 73,
    path: "/pricing",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Pricing,
    layout: "/catalog",
  },
  // {
  //   id: 74,
  //   path: "/new-purchase-order",
  //   name: "Pricing",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: NewPurchaseOrder,
  //   layout: "/catalog",
  // },
  // {
  //   id: 74,
  //   path: "/demand-notes-list",
  //   name: "Pricing",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: NewPurchaseOrder,
  //   layout: "/catalog",
  // },
];

export default dashboardRoutes;
