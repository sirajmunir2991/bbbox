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
import BrandList from "views/TableList/BrandList";
import NewProduct from "views/TableList/NewProduct";
import MasterProductList from "views/TableList/MasterProductList";
import ProductList from "views/TableList/ProductList";
import Pricing from "views/TableList/Pricing";
import NewPurchaseOrder from "views/TableList/NewPurchaseOrder";
import DemandNotesList from "views/TableList/DemandNotesList";
import PurchaseOrdersList from "views/TableList/PurchaseOrdersList";
import NewShipment from "views/TableList/NewShipment";
import PurchasesList from "views/TableList/PurchasesList";
import ShipmentList from "views/TableList/ShipmentList";
import NewPurchaseDocument from "views/TableList/NewPurchaseDocument";
import CreateQuotation from "views/TableList/CreateQuotation";
import QuotationList from "views/TableList/QuotationList";
import CreateSaleOrder from "views/TableList/CreateSaleOrder";
import SaleOrdersList from "views/TableList/SaleOrdersList";
import SaleInvoiceList from "views/TableList/SaleInvoiceList";
import PurchaseGRNsList from "views/TableList/PurchaseGRNsList";
import NewSaleReturn from "views/TableList/NewSaleReturn";
import SaleReturnList from "views/TableList/SaleReturnList";
import StockTransferGrnList from "views/TableList/StockTransferGrnList";
import SaleDeliveryNotesList from "views/TableList/SaleDeliveryNotesList";
import CreateNew from "views/TableList/CreateNew";
import StockTransferList from "views/TableList/StockTransferList";
import CreateStockAdjustment from "views/TableList/CreateStockAdjustment";
import StockAdjustmentList from "views/TableList/StockAdjustmentList";
import StockCoutingList from "views/TableList/StockCoutingList";

const dashboardRoutes = [
  {
    id: 61,
    path: "/new-category",
    name: "New Category",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/catalog",
  },
  {
    id: 62,
    path: "/category-list",
    name: "Category List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SwbeScreen,
    layout: "/catalog",
  },
  {
    id: 63,
    path: "/new-brand",
    name: "Cost and Sales Prices",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CspScreen,
    layout: "/catalog",
  },
  {
    id: 64,
    path: "/brand-list",
    name: "All Branches Stock",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: BrandList,
    layout: "/catalog",
  },
  {
    id: 65,
    path: "/new-unit",
    name: "New Unit",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductTrackScreen,
    layout: "/catalog",
  },
  {
    id: 66,
    path: "/unit-list",
    name: "Unit List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferScreen,
    layout: "/catalog",
  },
  {
    id: 67,
    path: "/new-origin",
    name: "New Origin",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferMismatchScreen,
    layout: "/catalog",
  },

  {
    id: 68,
    path: "/origins-list",
    name: "origins List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SIDScreen,
    layout: "/catalog",
  },
  {
    id: 69,
    path: "/new-product",
    name: "New Product",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: NewProduct,
    layout: "/catalog",
  },
  {
    id: 70,
    path: "/master-product-list",
    name: "Master Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: MasterProductList,
    layout: "/catalog",
  },
  {
    id: 71,
    path: "/product-list",
    name: "Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductList,
    layout: "/catalog",
  },
  {
    id: 72,
    path: "/pricing",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Pricing,
    layout: "/catalog",
  },
  {
    // id: 74,
    path: "/new-purchase-order",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: NewPurchaseOrder,
    layout: "/catalog",
  },
  {
    // id: 74,
    path: "/demand-notes-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: DemandNotesList,
    layout: "/catalog",
  },
  {
    path: "/purchase-orders-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PurchaseOrdersList,
    layout: "/catalog",
  },
  {
    path: "/new-shipment",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: NewShipment,
    layout: "/catalog",
  },
  {
    path: "/shipment-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ShipmentList,
    layout: "/catalog",
  },
  {
    path: "/new-purchase-document",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: NewPurchaseDocument,
    layout: "/catalog",
  },
  {
    path: "/purchases-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PurchasesList,
    layout: "/catalog",
  },
  //Sales
  {
    path: "/create-quotation",
    name: "create-quotation",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CreateQuotation,
    layout: "/catalog",
  },
  {
    path: "/quotation-list",
    name: "quotationlist",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: QuotationList,
    layout: "/catalog",
  },
  {
    path: "/create-sale-order",
    name: "quotationlist",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CreateSaleOrder,
    layout: "/catalog",
  },
  {
    path: "/sale-orders-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SaleOrdersList,
    layout: "/catalog",
  },
  {
    path: "/sale-invoice-list",
    name: "Pricing",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SaleInvoiceList,
    layout: "/catalog",
  },
  {
    path: "/purchase-grns-list",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: PurchaseGRNsList,
    layout: "/catalog",
  },
  {
    path: "/new-sale-return",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: NewSaleReturn,
    layout: "/catalog",
  },
  {
    path: "/sale-return-list",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SaleReturnList,
    layout: "/catalog",
  },
  {
    path: "/sale-delivery-note-list",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: SaleDeliveryNotesList,
    layout: "/catalog",
  },
  {
    path: "/create-new",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CreateNew,
    layout: "/catalog",
  },
  {
    path: "/stock-transfer-list",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockTransferList,
    layout: "/catalog",
  },
  {
    path: "/create-stock-adjustment",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CreateStockAdjustment,
    layout: "/catalog",
  },
  {
    path: "/stock-adjustment-list",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockAdjustmentList,
    layout: "/catalog",
  },
  {
    path: "/stock-countings-List",
    name: "PurchaseGRNsList",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: StockCoutingList,
    layout: "/catalog",
  },
];

export default dashboardRoutes;
