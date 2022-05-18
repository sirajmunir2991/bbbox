/*eslint-disable*/
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { AsyncPaginate } from "react-select-async-paginate";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Icon from "@material-ui/core/Icon";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import OpeningStockService from "services/openingStock.service";

import LocationService from "services/location.service";
import CommonService from "services/common.service";
// import CustomModal from "components/CustomModal/CustomModal";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";
import RTLNavbarLinks from "components/Navbars/RTLNavbarLinks.js";

import Select from "react-select";
import AsyncSelect from "react-select/async";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";
import { Modal, Box, Typography, Fade, Backdrop } from "@material-ui/core";
import CustomPicker from "../CustomPicker/CustomPicker";

import DateFnsUtils from "@date-io/date-fns"; // choose your lib

import { format } from "date-fns";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import commonService from "services/common.service";
import Person from "@material-ui/icons/Person";
import SubMenu from "./SubMenu";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleLarge = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles(styles);

var options = [];
var TransferTooptions = [];
var TransferFromoptions = [];
var locOptions = [];
var parentCategoryOptions = [];
var subCategoryOptions = [];
var accountOptions = [];
var secondAccountOptions = [];
var BusinessTypesOptions = [];
var brandOptions = [];
var customerOptions = [];
var categoryOptions = [];
var supplierOptions = [];
var originOptions = [];
var productOptions = [];
var adjustmentTypeOptions = [];
var supplierCompanyOptions = []

const SidebarNav = styled.nav`
  background: #15171c;
  width: 260px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

var groupByOptions = [
  {
    label: "Supplier",
    value: "supplier",
  },
  {
    label: "Category",
    value: "category",
  },
  {
    label: "Brand",
    value: "brand",
  },
];
var orderbyOptions = [
  {
    label: "Product",
    value: "product",
  },
  {
    label: "Quantity",
    value: "quantity",
  },
  {
    label: "Expiry",
    value: "expiry",
  },
];
var directionOptions = [
  {
    label: "ASC",
    value: "asc",
  },
  {
    label: "DESC",
    value: "desc",
  },
];

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useLocation();
  const history = useHistory();

  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedFromDate, handleFromDateChange] = useState(new Date());
  const [selectedToDate, handleToDateChange] = useState(new Date());
  const [selectedSecondToDate, handleSecondToDateChange] = useState(new Date());
  const [selectedSecondFromDate, handleSecondFromDateChange] = useState(
    new Date()
  );

  const [showModal, setShowModal] = useState(false);

  const [option, setOption] = useState("");
  const [secondAccountOption, setSecondAccountOption] = useState("");
  const [transferToOption, setTransferToOption] = useState("");
  const [transferFromOption, setTransferFromOption] = useState("");
  const [brandOption, setbrandOption] = useState("");
  const [supplierOption, setSupplierOption] = useState("");
  const [categoryOption, setcategoryOption] = useState("");
  const [originOption, setoriginOption] = useState("");
  const [groupByOption, setgroupByOption] = useState("");
  const [orderbyOption, setorderbyOption] = useState("");
  const [directionOption, setdirectionOption] = useState("");
  const [productOption, setproductOption] = useState("");
  const [adjustTypeOption, setadjustTypeOption] = useState("");
  const [radioGroup, setRadioGroupChange] = useState("0");
  const [checked, setChecked] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [testOpen, setTestOpen] = React.useState(false);
  const [DFSopen, setDFSOpen] = React.useState(false);
  const [swbeOpen, setSwbeOpen] = React.useState(false);
  const [cSPOpen, setCSPOpen] = React.useState(false);
  const [ABSOpen, setABSOpen] = React.useState(false);
  const [ProdOpen, setProdOpen] = React.useState(false);
  const [SIDOpen, setSIDOpen] = React.useState(false);
  const [adjOpen, setAdjOpen] = React.useState(false);
  const [stmOpen, setstmOpen] = React.useState(false);
  const [stockTransferOpen, setstockTransferOpen] = React.useState(false);
  const [invoiceSummaryOpen, setInvoiceSummaryOpen] = React.useState(false);
  const [invoiceDetailOpen, setInvoiceDetailOpen] = React.useState(false);
  const [byMonth, setByMonth] = React.useState(false);
  const [byYear, setByYear] = React.useState(false);
  const [byCustomer, setByCustomer] = React.useState(false);
  const [partysummary, setPartySummary] = React.useState(false);
  const [imsCust, setIMSCust] = React.useState(false);
  const [imsCustSummary, setIMSCustSummary] = React.useState(false);
  const [imsChannel, setIMSChannel] = React.useState(false);
  const [SALES, setSALES] = React.useState(false);
  const [AllStockSales, setAllStockSales] = React.useState(false);
  const [SALESComparison, setSALESComparison] = React.useState(false);
  const [SALESbyCustomer, setSALESbyCustomer] = React.useState(false);
  const [StockDays, setStockDays] = React.useState(false);
  const [BranchCategory, setBranchCategory] = React.useState(false);
  const [BranchSummary, setBranchSummary] = React.useState(false);
  const [KeySummary, setKeySummary] = React.useState(false);
  const [KeyDetail, setKeyDetail] = React.useState(false);
  const [BranchProduct, setBranchProduct] = React.useState(false);
  const [ImsByCustomerAdmin, setImsByCustomerAdmin] = React.useState(false);
  const [ImsByCustomerSumAdmin, setImsByCustomerSumAdmin] = React.useState(
    false
  );
  const [ImsByCustomerChanAdmin, setImsByCustomerChanAdmin] = React.useState(
    false
  );
  const [ImsByProductAdmin, setImsByProductAdmin] = React.useState(false);
  const [ImsBySupplierAdmin, setImsBySupplierAdmin] = React.useState(false);
  const [ImsByCustomerPnL, setImsByCustomerPnL] = React.useState(false);
  const [ImsByProductPnL, setImsByProductPnL] = React.useState(false);
  const [ImsByCustPnL, setImsByCustPnL] = React.useState(false);
  const [KhyberByBranchPLS, setKhyberByBranchPLS] = React.useState(false);
  const [StockValueByVendor, setStockValueByVendor] = React.useState(false);
  const [StockValueByProduct, setStockValueByProduct] = React.useState(false);
  const [CompaniesProfitWise, setCompaniesProfitWise] = React.useState(false);
  const [Monthlydata, setMonthlyData] = React.useState(false);

  const [openDailyStatement, setOpenDailyStatement] = React.useState(false);
  const [
    openDailyCombinedStatement,
    setOpenDailyCombinedStatement,
  ] = React.useState(false);
  const [openCustomerStatement, setopenCustomerStatement] = React.useState(
    false
  );
  const [
    openCustomerCombinedStatement,
    setopenCustomerCombinedStatement,
  ] = React.useState(false);
  const [openWholeSaleInvoice, setopenWholeSaleInvoice] = React.useState(false);
  const [openWholeSaleLedger, setopenWholeSaleLedger] = React.useState(false);
  const [openWholeSaleSummary, setopenWholeSaleSummary] = React.useState(false);
  const [openGeneralLedger, setopenGeneralLedger] = React.useState(false);
  const [openBankCashSummary, setopenBankCashSummary] = React.useState(false);
  const [
    openBankLedgerSummaryDetails,
    setopenBankLedgerSummaryDetails,
  ] = React.useState(false);

  const [openCategoryList, setopenCategoryList] = React.useState(false);
  const [openNewCategory, setopenNewCategory] = React.useState(false);

  const [openPricing, setopenPricing] = React.useState(false);

  const [openProductList, setopenProductList] = React.useState(false);

  const [openMasterProductList, setopenMasterProductList] = React.useState(
    false
  );

  const [openOriginsList, setopenOriginsList] = React.useState(false);

  const [openUnitList, setopenUnitList] = React.useState(false);

  const [openBrandList, setopenBrandList] = React.useState(false);

  const [openNewProduct, setopenNewProduct] = React.useState(false);

  const [openNewBrand, setopenNewBrand] = React.useState(false);

  const [openNewUnit, setopenNewUnit] = React.useState(false);

  const [openNewOrigin, setopenNewOrigin] = React.useState(false);

  const [SRC, setSRC] = React.useState(false);

  const [adjDetailOpen, setAdjDetailOpen] = React.useState(false);
  const [DelNotesOpen, setDelNotesOpen] = React.useState(false);
  const [DelNotesDetailOpen, setDelNotesDetailOpen] = React.useState(false);
  const [GRNListOpen, setGRNListOpen] = React.useState(false);
  const [GRNDetailOpen, setGRNDetailOpen] = React.useState(false);

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },

    {
      title: "Analytics",
      path: "/stock",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: "Stock",
          path: "/stock",
          icon: <AiIcons.AiFillHome />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "Opening Stock",
              // path: "stock/opening-stock",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setOpen(true);
              },
            },
            {
              title: "Stock With Batch & Expiry",
              // path: "/stock/swbe",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setSwbeOpen(true);
              },
            },
            {
              title: "Cost & sales Prices",
              // path: "/stock/csp",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setCSPOpen(true);
              },
            },
            {
              title: "All Branches Stock",
              // path: "/stock/abs",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setABSOpen(true);
              },
            },
            {
              title: "Product Tank",
              // path: "/stock/product-track",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setProdOpen(true);
              },
            },
            {
              title: "Stock Transfer",
              // path: "/stock/stock-transfer",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setstockTransferOpen(true);
              },
            },
            {
              title: "Shifting Invoice Detail",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setSIDOpen(true);
              },
            },
            {
              title: "Stock Transfer Mismatch",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setstmOpen(true);
              },
            },
            {
              title: "Stock Adjustments",
              // path: "/stock/stock-transfer-mismatch",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setAdjOpen(true);
              },
            },
            {
              title: "Adjustment Detail",
              // path: "/stock/stock-transfer-mismatch",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setAdjDetailOpen(true);
              },
            },
            {
              title: "Delivery Notes",
              // path: "/stock/transferdetail",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setDelNotesOpen(true);
              },
            },
            {
              title: "Delivery Note Detail",
              // path: "/stock/transferdetail",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setDelNotesDetailOpen(true);
              },
            },
            {
              title: "Good Received Notes",
              // path: "/stock/adjustments",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setAdjOpen(true);
              },
            },
            {
              title: "Good Received Notes List",
              // path: "/stock/adjustments",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setGRNDetailOpen(true);
              },
            },
          ],
        },
        {
          title: "Retail Sales",
          // path: "/retail",
          icon: <IoIcons.IoIosPaper />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "Invoice Summary",
              // path: "/salesindex/invoice-summary",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setInvoiceSummaryOpen(true);
              },
            },
            {
              title: "Invoice Detail",
              // path: "/salesindex/nvoice-detail",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setInvoiceDetailOpen(true);
              },
            },
            {
              title: "Sale Summary by Month",
              // path: "/salessummary/ByMonthScreen",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setByMonth(true);
              },
            },
            {
              title: "Sale Summary by year",
              // path: "/salessummary/byyear",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setByYear(true);
              },
            },
            {
              title: "Sale Summary by Customer",
              // path: "/salessummary/ByCustomerScreen",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setByCustomer(true);
              },
            },
            {
              title: "Sale Summary by Party Summary",
              // path: "/salessummary/partysummary",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setPartySummary(true);
              },
            },
            {
              title: "Sale Rate by Customer",
              // path: "/general/salesratebycustomer",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setSRC(true);
              },
            },
            {
              title: "IMS by Customer",
              // path: "/ims/imsbycustomer",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setIMSCust(true);
              },
            },
            {
              title: "IMS by Customer Summary",
              // path: "/ims/imsbycustomersummary",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setIMSCustSummary(true);
              },
            },
            {
              title: "IMS By Channel",
              // path: "/ims/imsbychannel",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setIMSChannel(true);
              },
            },
          ],
        },
        {
          title: "Admin Sales",
          // path: "/reports/reports3",
          icon: <IoIcons.IoIosPaper />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "Sales",
              path: "/adminsales/sales",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Sales Comparison",
              path: "/adminsales/salescomparison",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Sales By Customer",
              path: "/adminsales/salecustomer",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "All Stock & Sales",
              path: "/adminsales/allstocksales",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Stock Days",
              path: "/adminsales/stockdays",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Branch & Brand Category",
              path: "/adminsales/branchandbrandcategory",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Branch Summary",
              path: "/adminsales/branchsummary",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "KeyAccounts Summary",
              path: "/adminsales/keysummary",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "KeyAccounts Details",
              path: "/adminsales/keydetail",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Branch & Product",
              path: "/adminsales/branchproduct",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Stock Days",
              path: "/adminsales/stockdays",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS by Customer",
              path: "/adminsales/imsbycustomer",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS by Customer Summary",
              path: "/adminsales/imsbycustomersummary",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS By Channel",
              path: "/adminsales/imsbycustomerbychannel",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS by Product",
              path: "/adminsales/imsbyproduct",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS by Supplier",
              path: "/adminsales/imsbysupplier",
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
        {
          title: "Productivity",
          // path: "/reports/reports3",
          icon: <IoIcons.IoIosPaper />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "DSF wise Product wise",
              // path: "/adminsales/sales",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setGRNListOpen(true);
              },
            },
            {
              title: "DSF Execution",
              // path: "/adminsales/salescomparison",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setDFSOpen(true);
              },
            },
          ],
        },
        {
          title: "Accounts",
          path: "/reports/reports3",
          icon: <IoIcons.IoIosPaper />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "Daily Statement",
              path: "/accounts/dailystatement",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "PDaily Combined Statement",
              path: "/accounts/dailycombinedstatement",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Customer Statement Combined",
              path: "/accounts/customerstatement",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Customer Statement Combined",
              path: "/accounts/customerstatementcombined",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Wholesale Invoice",
              path: "/accounts/wholesaleinvoice",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Wholesale Ledger",
              path: "/accounts/wholesaleledger",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Wholesale Summary Ledger",
              path: "/accounts/wholesalesummaryledger",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "General Ledger",
              path: "/accounts/generalledger",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Bank Cash/ Bank Summary",
              path: "/accounts/BankCashBanksummary",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Account Ledger Summary/Details",
              path: "/accounts/bankledgersummarydetails",
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
        {
          title: "Profit & loss",
          path: "/reports/reports3",
          icon: <IoIcons.IoIosPaper />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              title: "IMS By Customer",
              path: "/profitloss/imsbycustomer",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS By Product",
              path: "/profitloss/imsbyproduct",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "IMS By Customer Pnl",
              path: "/profitloss/imsbycustpnl",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Khyber by Branch PLS and total",
              path: "/profitloss/kbplstotal",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Stock Value by Vendor",
              path: "/profitloss/svbyvendor",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Stock Value by Product and Location",
              path: "/profitloss/svbyproductlocation",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Companies Profit Wise",
              path: "/profitloss/companiesprofitwise",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Monthly Data",
              path: "/profitloss/monthlydata",
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
        // {
        //   title: "Stock Counting",
        //   path: "/reports/reports3",
        //   icon: <IoIcons.IoIosPaper />,
        //   iconClosed: <RiIcons.RiArrowDownSFill />,
        //   iconOpened: <RiIcons.RiArrowUpSFill />,
        //   subNav: [
        //     {
        //       title: "Stock Counting report",
        //       path: "/profitloss/",
        //       icon: <IoIcons.IoIosPaper />,
        //     },
        //   ],
        // },
      ],
    },

    // Inventory
    {
      title: "Inventory",
      path: "/catalog",
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,

      subNav: [
        {
          title: "Catalog",
          path: "/catalog",
          icon: <AiIcons.AiFillHome />,
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
          subNav: [
            {
              id: 1,
              title: "New Category",
              path: "catalog/new-category",
              icon: <IoIcons.IoIosPaper />,
              handleOpen: () => {
                setOpen(true);
              },
            },
            {
              title: "Category List",
              path: "/category-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "New Brand",
              path: "/new-brand",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Brand List",
              path: "/brand-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "New Unit",
              path: "/new-unit",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Unit List",
              path: "/unit-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "New Origin",
              path: "/new-origin",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Origin List",
              path: "/origins-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "New Product",
              path: "/new-product",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Master Product List",
              path: "/master-product-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Product List",
              path: "/product-list",
              icon: <IoIcons.IoIosPaper />,
            },
            {
              title: "Pricing",
              path: "/pricing",
              icon: <IoIcons.IoIosPaper />,
            },
          ],
        },
      ],
    },
    // Organization
    // {
    //     title: "Organization",
    //     path: "/overview",
    //     icon: <AiIcons.AiFillHome />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    // },
    // Security
    // {
    //     title: "Security",
    //     path: "/overview",
    //     icon: <AiIcons.AiFillHome />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />,
    // }
  ];

  async function loadOptionsLoc() {
    const response = await LocationService.Location();
    await response.data.Data.forEach((element) => {
      locOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return locOptions;
  }
  async function loadOptionsAccount() {
    const response = await commonService.Account();
    await response.data.Data.forEach((element) => {
      accountOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return accountOptions;
  }
  async function loadOptionsParentCategory() {
    const response = await commonService.ParentCategory();
    await response.data.Data.forEach((element) => {
      parentCategoryOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return parentCategoryOptions;
  }

  async function loadOptionsSubCategory() {
    const response = await commonService.SubCategory();
    await response.data.Data.forEach((element) => {
      subCategoryOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return parentCategoryOptions;
  }
  async function loadOptionsBusinessType() {
    const response = await commonService.BusinessType();
    await response.data.Data.forEach((element) => {
      BusinessTypesOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return BusinessTypesOptions;
  }
  async function loadOptionsSecondAccount() {
    const response = await commonService.SecondAccount();
    await response.data.Data.forEach((element) => {
      secondAccountOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return secondAccountOptions;
  }
  async function loadOptionsTransferTo() {
    const response = await CommonService.Transfer();
    await response.data.Data.forEach((element) => {
      TransferTooptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return TransferTooptions;
  }
  async function loadOptionsTransferFrom() {
    const response = await CommonService.Transfer();
    await response.data.Data.forEach((element) => {
      TransferFromoptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return TransferFromoptions;
  }
  async function loadOptionsBrand() {
    const response = await CommonService.Brands();
    await response.data.Data.forEach((element) => {
      brandOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return brandOptions;
  }
  async function loadOptionsSupplierCompany() {
    const response = await CommonService.Brands();
    await response.data.Data.forEach((element) => {
      supplierCompanyOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return supplierCompanyOptions;
  }
  async function loadOptionsCustomer() {
    const response = await CommonService.Customer();
    await response.data.Data.forEach((element) => {
      customerOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return customerOptions;
  }
  async function loadOptionsCat() {
    const response = await CommonService.Categories();
    await response.data.Data.forEach((element) => {
      categoryOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return categoryOptions;
  }
  async function loadOptionsSupp() {
    const response = await CommonService.Supplier();
    await response.data.Data.forEach((element) => {
      supplierOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return supplierOptions;
  }
  async function loadOptionsOrigin() {
    const response = await CommonService.Origin();
    await response.data.Data.forEach((element) => {
      originOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return originOptions;
  }
  async function loadOptionsProduct(search, loadedOptions, { page }) {
    productOptions = [];
    const response = await CommonService.Product(search, page);
    await response.data.Data.forEach((element) => {
      productOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    let hasMore = productOptions.length != 0;
    return {
      options: productOptions,
      hasMore: hasMore,
      additional: {
        page: page + 1,
      },
    };
  }
  async function loadOptionsAdjustType() {
    const response = await CommonService.AdjustmentType();
    await response.data.Data.forEach((element) => {
      adjustmentTypeOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return adjustmentTypeOptions;
  }

  const handleOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  const handleDFSOpen = (event) => {
    event.preventDefault();
    setDFSOpen(true);
  };
  const handleSwbeOpen = (event) => {
    event.preventDefault();
    setSwbeOpen(true);
  };
  const handleStmOpen = (event) => {
    event.preventDefault();
    setstmOpen(true);
  };
  const handleStockTransferOpen = (event) => {
    event.preventDefault();
    setstockTransferOpen(true);
  };
  const handleInvoiceSummary = (event) => {
    event.preventDefault();
    setInvoiceSummaryOpen(true);
  };
  const handleInvoiceDetail = (event) => {
    event.preventDefault();
    setInvoiceDetailOpen(true);
  };
  const handleByMonth = (event) => {
    event.preventDefault();
    setByMonth(true);
  };
  const handleByYear = (event) => {
    event.preventDefault();
    setByYear(true);
  };
  const handleByCustomer = (event) => {
    event.preventDefault();
    setByCustomer(true);
  };
  const handlePartySummary = (event) => {
    event.preventDefault();
    setPartySummary(true);
  };
  const handleIMSCust = (event) => {
    event.preventDefault();
    setIMSCust(true);
  };
  const handleIMSCustSummary = (event) => {
    event.preventDefault();
    setIMSCustSummary(true);
  };
  const handleIMSChannel = (event) => {
    event.preventDefault();
    setIMSChannel(true);
  };
  const handleSALES = (event) => {
    event.preventDefault();
    setSALES(true);
  };
  const handleAllStockSALES = (event) => {
    event.preventDefault();
    setAllStockSales(true);
  };
  const handleSALESComparison = (event) => {
    event.preventDefault();
    setSALESComparison(true);
  };
  const handleSALESbyCustomer = (event) => {
    event.preventDefault();
    setSALESbyCustomer(true);
  };
  const handleStockDays = (event) => {
    event.preventDefault();
    setStockDays(true);
  };
  const handleBranchCategory = (event) => {
    event.preventDefault();
    setBranchCategory(true);
  };
  const handleBranchSummary = (event) => {
    event.preventDefault();
    setBranchSummary(true);
  };
  const handleKeySummary = (event) => {
    event.preventDefault();
    setKeySummary(true);
  };
  const handleKeyDetail = (event) => {
    event.preventDefault();
    setKeyDetail(true);
  };
  const handleBranchProduct = (event) => {
    event.preventDefault();
    setBranchProduct(true);
  };
  const handleImsByCustomerAdmin = (event) => {
    event.preventDefault();
    setImsByCustomerAdmin(true);
  };
  const handleImsByCustomerSumAdmin = (event) => {
    event.preventDefault();
    setImsByCustomerSumAdmin(true);
  };
  const handleImsByCustomerChanAdmin = (event) => {
    event.preventDefault();
    setImsByCustomerChanAdmin(true);
  };
  const handleImsByProductAdmin = (event) => {
    event.preventDefault();
    setImsByProductAdmin(true);
  };
  const handleImsBySupplierAdmin = (event) => {
    event.preventDefault();
    setImsBySupplierAdmin(true);
  };

  const handleImsByCustomerPnL = (event) => {
    event.preventDefault();
    setImsByCustomerPnL(true);
  };
  const handleImsByProductPnL = (event) => {
    event.preventDefault();
    setImsByProductPnL(true);
  };
  const handleImsByCustPnL = (event) => {
    event.preventDefault();
    setImsByCustPnL(true);
  };
  const handleKhyberByBranchPLS = (event) => {
    event.preventDefault();
    setKhyberByBranchPLS(true);
  };
  const handleStockValueByVendor = (event) => {
    event.preventDefault();
    setStockValueByVendor(true);
  };
  const handleStockValueByProduct = (event) => {
    event.preventDefault();
    setStockValueByProduct(true);
  };
  const handleCompaniesProfitWise = (event) => {
    event.preventDefault();
    setCompaniesProfitWise(true);
  };
  const handleMonthlyData = (event) => {
    event.preventDefault();
    setMonthlyData(true);
  };

  const handleSRC = (event) => {
    event.preventDefault();
    setSRC(true);
  };

  const handleCSPOpen = (event) => {
    event.preventDefault();
    setCSPOpen(true);
  };
  const handleABSOpen = (event) => {
    event.preventDefault();
    setABSOpen(true);
  };
  const handleProductTrackOpen = (event) => {
    event.preventDefault();
    setProdOpen(true);
  };
  const handleSIDOpen = (event) => {
    event.preventDefault();
    setSIDOpen(true);
  };
  const handleAdjustmentOpen = (event) => {
    event.preventDefault();
    setAdjOpen(true);
  };
  const handleAdjDetailOpen = (event) => {
    event.preventDefault();
    setAdjDetailOpen(true);
  };
  const handleDelNotesOpen = (event) => {
    event.preventDefault();
    setDelNotesOpen(true);
  };
  const handleDelNotesDetailOpen = (event) => {
    event.preventDefault();
    setDelNotesDetailOpen(true);
  };
  const handleGRNListOpen = (event) => {
    event.preventDefault();
    setGRNListOpen(true);
  };
  const handleGRNDetailOpen = (event) => {
    event.preventDefault();
    setGRNDetailOpen(true);
  };

  function logChange(val) {
    setOption(val);
  }
  function AccountChange(val) {
    setOption(val);
  }
  function ParentCategory(val) {
    setOption(val);
  }
  function SubCategory(val) {
    setOption(val);
  }
  function businessTypeChange(val) {
    setOption(val);
  }
  function SecondAccountChange(val) {
    secondAccountOption(val);
  }
  function radioGroupChange(event) {
    setRadioGroupChange(event.target.value);
  }
  function checkboxChange(event) {
    setChecked(event.target.checked);
  }
  function originChange(val) {
    setoriginOption(val);
  }
  function brandChange(val) {
    setbrandOption(val);
  }
  function suppChange(val) {
    setsuppOption(val);
  }
  function supplierCompanyChange(val) {
    setOption(val);
  }
  function groupChange(val) {
    setgroupByOption(val);
  }
  function directionChange(val) {
    setdirectionOption(val);
  }
  function categoryChange(val) {
    setcategoryOption(val);
  }
  function orderChange(val) {
    setorderbyOption(val);
  }
  function productChange(val) {
    setproductOption(val);
  }
  function adjTypeChange(val) {
    setadjustTypeOption(val);
  }
  function transferToChange(val) {
    setTransferToOption(val);
  }
  function transferFromChange(val) {
    setTransferFromOption(val);
  }

  // reports
  const handleOpenDailyStatement = (event) => {
    event.preventDefault();
    setOpenDailyStatement(true);
  };

  const handleOpenDailyCombinedStatement = (event) => {
    event.preventDefault();
    setOpenDailyCombinedStatement(true);
  };
  const handleOpenCustomerStatement = (event) => {
    event.preventDefault();
    setopenCustomerStatement(true);
  };

  const handleOpenCustomerCombinedStatement = (event) => {
    event.preventDefault();
    setopenCustomerCombinedStatement(true);
  };
  const handleOpenWholeSaleInvoice = (event) => {
    event.preventDefault();
    setopenWholeSaleInvoice(true);
  };
  const handleOpenWholeSaleLedger = (event) => {
    event.preventDefault();
    setopenWholeSaleLedger(true);
  };
  const handleOpenWholeSaleSummary = (event) => {
    event.preventDefault();
    setopenWholeSaleSummary(true);
  };
  const handleOpenGeneralLedger = (event) => {
    event.preventDefault();
    setopenGeneralLedger(true);
  };
  const handleOpenBankCashSummary = (event) => {
    event.preventDefault();
    setopenBankCashSummary(true);
  };
  const handleOpenBankLedgerSummaryDetails = (event) => {
    event.preventDefault();
    setopenBankLedgerSummaryDetails(true);
  };
  const handleOpenCategoryList = (event) => {
    event.preventDefault();
    setopenCategoryList(true);
  };
  const handleOpenNewCategory = (event) => {
    event.preventDefault();
    setopenNewCategory(true);
  };
  const handleOpenPricing = (event) => {
    event.preventDefault();
    setopenPricing(true);
  };
  const handleOpenProductList = (event) => {
    event.preventDefault();
    setopenProductList(true);
  };
  const handleOpenMasterProductList = (event) => {
    event.preventDefault();
    setopenMasterProductList(true);
  };
  const handleOpenOriginsList = (event) => {
    event.preventDefault();
    setopenOriginsList(true);
  };
  const handleOpenUnitList = (event) => {
    event.preventDefault();
    setopenUnitList(true);
  };
  const handleOpenBrandList = (event) => {
    event.preventDefault();
    setopenBrandList(true);
  };
  const handleOpenNewProduct = (event) => {
    event.preventDefault();
    setopenNewProduct(true);
  };
  const handleOpenNewBrand = (event) => {
    event.preventDefault();
    setopenNewBrand(true);
  };
  const handleOpenNewUnit = (event) => {
    event.preventDefault();
    setopenNewUnit(true);
  };
  const handleOpenNewOrigin = (event) => {
    event.preventDefault();
    setopenNewOrigin(true);
  };

  const handleClose = () => setOpen(false);
  const handleDFSClose = () => setDFSOpen(false);
  const handleSwbeClose = () => setSwbeOpen(false);
  const handleCSPClose = () => setCSPOpen(false);
  const handleABSClose = () => setABSOpen(false);
  const handleProdClose = () => setProdOpen(false);
  const handleStmClose = () => setstmOpen(false);
  const handleStockTransferClose = () => setstockTransferOpen(false);
  const handleInvoiceSummaryClose = () => setInvoiceSummaryOpen(false);
  const handleInvoiceDetailClose = () => setInvoiceDetailOpen(false);
  const handleByMonthClose = () => setByMonth(false);
  const handleByYearClose = () => setByYear(false);
  const handleByCustomerClose = () => setByCustomer(false);
  const handlePartySummaryClose = () => setPartySummary(false);
  const handleSRCClose = () => setSRC(false);
  const handleIMSCustClose = () => setIMSCust(false);
  const handleIMSCustSummaryClose = () => setIMSCustSummary(false);
  const handleSALESClose = () => setSALES(false);
  const handleAllStockSalesClose = () => setAllStockSales(false);
  const handleSALESComparisonClose = () => setSALESComparison(false);
  const handleSALESbyCustomerClose = () => setSALESbyCustomer(false);
  const handleStockDaysClose = () => setStockDays(false);
  const handleBranchCategoryClose = () => setBranchCategory(false);
  const handleBranchSummaryClose = () => setBranchSummary(false);
  const handleKeySummaryClose = () => setKeySummary(false);
  const handleKeyDetailClose = () => setKeyDetail(false);
  const handleBranchProductClose = () => setBranchProduct(false);
  const handleImsByCustomerAdminClose = () => setImsByCustomerAdmin(false);
  const handleImsByCustomerSumAdminClose = () =>
    setImsByCustomerSumAdmin(false);
  const handleImsByCustomerChanAdminClose = () =>
    setImsByCustomerChanAdmin(false);
  const handleImsByProductAdminClose = () => setImsByProductAdmin(false);
  const handleImsBySupplierAdminClose = () => setImsBySupplierAdmin(false);
  const handleImsByCustomerPnLClose = () => setImsByCustomerPnL(false);
  const handleImsByProductPnLClose = () => setImsByProductPnL(false);
  const handleImsByCustPnLClose = () => setImsByCustPnL(false);
  const handleKhyberByBranchPLSClose = () => setKhyberByBranchPLS(false);
  const handleStockValueByVendorClose = () => setStockValueByVendor(false);
  const handleStockValueByProductClose = () => setStockValueByProduct(false);
  const handleCompaniesProfitWiseClose = () => setCompaniesProfitWise(false);
  const handleMonthlyDataClose = () => setMonthlyData(false);

  const handleDailyStatementClose = () => setOpenDailyStatement(false);
  const handleDailyCombinedStatementClose = () =>
    setOpenDailyCombinedStatement(false);
  const handleCustomerStatementClose = () => setopenCustomerStatement(false);
  const handleCustomerCombinedStatementClose = () =>
    setopenCustomerCombinedStatement(false);
  const handleWholeSaleInvoiceClose = () => setopenWholeSaleInvoice(false);
  const handleWholeSaleLedgerClose = () => setopenWholeSaleLedger(false);
  const handleWholeSaleSummaryClose = () => setopenWholeSaleSummary(false);
  const handleGeneralLedgerClose = () => setopenGeneralLedger(false);
  const handleBankCashSummaryClose = () => setopenBankCashSummary(false);
  const handleBankLedgerSummaryDetailsClose = () =>
    setopenBankLedgerSummaryDetails(false);

  const handleCategoryListClose = () => setopenCategoryList(false);

  // new category
  const handleNewCategoryClose = () => setopenNewCategory(false);

  //Pricing
  const handlePricingClose = () => setopenPricing(false);

  //Product list
  const handleProductListClose = () => setopenProductList(false);

  //Master Product List
  const handleMasterProductListClose = () => setopenMasterProductList(false);

  //Origins list
  const handleOriginsListClose = () => setopenOriginsList(false);

  // Unit List
  const handleUnitListClose = () => setopenUnitList(false);

  //brand list
  const handleBrandListClose = () => setopenBrandList(false);

  // new brand

  const handleNewBrandClose = () => setopenNewBrand(false);

  // New Unit
  const handleNewUnitClose = () => setopenNewUnit(false);

  // New Origin
  const handleNewOriginClose = () => setopenNewOrigin(false);

  //New Product
  const handleNewProductClose = () => setopenNewProduct(false);

  const handleIMSChannelClose = () => setIMSChannel(false);
  const handleSIDClose = () => setSIDOpen(false);
  const handleAdjClose = () => setAdjOpen(false);
  const handleAdjDetailClose = () => setAdjDetailOpen(false);
  const handleDelNotesClose = () => setDelNotesOpen(false);
  const handleDelNotesDetailClose = () => setDelNotesDetailOpen(false);
  const handleGRNListClose = () => setGRNListOpen(false);
  const handleGRNDetailClose = () => setGRNDetailOpen(false);

  const handleRedirect = () => {
    // console.log(option.value, format(selectedDate, 'MM/dd/yyyy'))
    history.push(
      `/stock/opening-stock?label=${option.label}&value=${
        option.value
      }&selectedData=${format(selectedDate, "MM/dd/yyyy")}`
    );
    setOpen(false);
  };
  const handleRedirects = () => {
    // console.log(option.value, format(selectedDate, 'MM/dd/yyyy'))
    history.push(
      `/accounts/dailystatement?label=${option.label}&value=${
        option.value
      }&selectedData=${format(selectedDate, "MM/dd/yyyy")}`
    );
    setTestOpen(false);
  };

  const handleDownload = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    window.open(
      `http://145.239.254.41:8090/analysis/stock/openingstockdownload?Auth-Token=${
        user.Token
      }&criteria={"openingDate":"${format(
        selectedDate,
        "MM/dd/yyyy"
      )}","locationId":${option.value}}`
    );
  };
  const handleSwbeRedirect = () => {
    var minVal = document.getElementById("minval");
    var maxVal = document.getElementById("maxval");
    // console.log(option, brandOption, supplierOption, categoryOption,
    //   originOption,
    //   groupByOption,
    //   orderbyOption,
    //   directionOption,
    //   selectedDate, selectedFromDate, selectedToDate, minVal, maxVal);
    history.push(
      `/stock/swbe?loc=${option.value}&supp=${supplierOption.value}&brand=${
        brandOption.value
      }&category=${categoryOption.value}&origin=${originOption.value}&group=${
        groupByOption.value
      }&order=${orderbyOption.value}&dir=${
        directionOption.value
      }&selectedDate=${format(
        selectedDate,
        "MM/dd/yyyy"
      )}&selectedFrom=${format(
        selectedFromDate,
        "yyyy-MM-dd"
      )}&selectedTo=${format(selectedToDate, "yyyy-MM-dd")}&min=${
        minVal.value
      }&max=${maxVal.value}`
    );
    setSwbeOpen(false);
  };

  const handleSwbeDownload = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    window.open(
      `http://145.239.254.41:8090/analysis/stock/openingstockdownload?Auth-Token=${
        user.Token
      }&criteria={"openingDate":"${format(
        selectedDate,
        "MM/dd/yyyy"
      )}","locationId":${option.value}}`
    );
  };
  const handleCSPRedirect = () => {
    var minVal = document.getElementById("minval");
    var maxVal = document.getElementById("maxval");
    // console.log(option, brandOption, supplierOption, categoryOption,
    //   originOption,
    //   groupByOption,
    //   orderbyOption,
    //   directionOption,
    //   selectedDate, selectedFromDate, selectedToDate, minVal, maxVal);
    history.push(
      `/stock/csp?loc=${option.value}&supp=${supplierOption.value}&brand=${brandOption.value}&category=${categoryOption.value}&origin=${originOption.value}&min=${minVal.value}&max=${maxVal.value}`
    );
    setCSPOpen(false);
  };

  const handleCSPDownload = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    window.open(
      `http://145.239.254.41:8090/analysis/stock/openingstockdownload?Auth-Token=${
        user.Token
      }&criteria={"openingDate":"${format(
        selectedDate,
        "MM/dd/yyyy"
      )}","locationId":${option.value}}`
    );
  };
  const handleABSRedirect = () => {
    history.push(
      `/stock/abs?supp=${supplierOption.value}&brand=${
        brandOption.value
      }&category=${categoryOption.value}&origin=${originOption.value}&group=${
        groupByOption.value
      }&selectedDate=${format(selectedDate, "MM/dd/yyyy")}`
    );
    setABSOpen(false);
  };

  const handleABSDownload = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    window.open(
      `http://145.239.254.41:8090/analysis/stock/openingstockdownload?Auth-Token=${
        user.Token
      }&criteria={"openingDate":"${format(
        selectedDate,
        "MM/dd/yyyy"
      )}","locationId":${option.value}}`
    );
  };
  const handleProdRedirect = () => {
    history.push(
      `/stock/product-track?loc=${option.value}&prod=${
        productOption.value
      }&from=${format(selectedFromDate, "MM/dd/yyyy")}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}`
    );
    setProdOpen(false);
  };
  const handleStmRedirect = () => {
    history.push(
      `/stock/stock-transfer-mismatch?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );
    setstmOpen(false);
  };
  const handleStockTransferRedirect = () => {
    history.push(
      `/stock/stock-transfer?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&fromBranchId=${
        transferFromOption.value
      }&toBranchId=${transferToOption.value}`
    );
    setstockTransferOpen(false);
  };
  const handleInvoiceSummaryRedirect = () => {
    history.push(
      `/salesindex/invoice-summary?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&customerId=${
        option.value
      }&radioGroup=${radioGroup}`
    );
    setInvoiceSummaryOpen(false);
  };
  const handleInvoiceDetailRedirect = () => {
    history.push(
      `/salesindex/invoice-detail?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&customerId=${
        option.value
      }&radioGroup=${radioGroup}`
    );
    setInvoiceDetailOpen(false);
  };
  const handleByMonthRedirect = () => {
    history.push(
      `/salessummary/bymonth?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&customerId=${
        option.value
      }&radioGroup=${radioGroup}`
    );
    setByMonth(false);
  };
  const handleByYearRedirect = () => {
    history.push(
      `/salessummary/byyear?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&customerId=${
        option.value
      }&radioGroup=${radioGroup}`
    );
    setByYear(false);
  };
  const handleByCustomerRedirect = () => {
    history.push(
      `/salessummary/bycustomer?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&customerId=${
        option.value
      }&radioGroup=${radioGroup}`
    );
    handleByCustomerClose();
  };
  const handlePartySummaryRedirect = () => {
    history.push(
      `/salessummary/partysummary?date=${format(selectedDate, "MM/dd/yyyy")}`
    );
    handlePartySummaryClose();
  };

  const handleProdDownload = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    window.open(
      `http://145.239.254.41:8090/analysis/stock/openingstockdownload?Auth-Token=${
        user.Token
      }&criteria={"openingDate":"${format(
        selectedDate,
        "MM/dd/yyyy"
      )}","locationId":${option.value}}`
    );
  };

  const handleSIDRedirect = () => {
    var ref = document.getElementById("ref");
    history.push(`/stock/transferdetail?ref=${ref.value}`);
    handleSIDClose();
  };

  const handleAdjRedirect = () => {
    history.push(
      `/stock/adjustments?loc=${option.value}&type=${
        adjustTypeOption.value
      }&from=${format(selectedFromDate, "MM/dd/yyyy")}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}`
    );
    handleToDateChange();
  };
  const handleSRCRedirect = () => {
    history.push(
      `/general/salesratebycustomer?cust=${option.value}&supp=${
        supplierOption.value
      }&from=${format(selectedFromDate, "MM/dd/yyyy")}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}`
    );
    handleSRCClose();
  };
  const handleIMSCustRedirect = () => {
    history.push(
      `/ims/imsbycustomer?cust=${option.value}&supp=${
        supplierOption.value
      }&from=${format(selectedFromDate, "MM/dd/yyyy")}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}`
    );
    handleIMSCustClose();
  };
  const handleIMSCustSummaryRedirect = () => {
    history.push(
      `/ims/imsbycustomersummary?locationId=${
        option.value
      }&monthseperated=${checked}&from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );
    handleIMSCustSummaryClose();
  };
  const handleIMSChannelRedirect = () => {
    history.push(
      `/ims/imsbychannel?locationId=4&supp=${
        supplierOption.value
      }&from=${format(selectedFromDate, "MM/dd/yyyy")}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}`
    );
    handleIMSChannelClose();
  };
  const handleAdjDetailRedirect = () => {
    var ref = document.getElementById("ref");
    history.push(`/stock/adjustmentdetail?ref=${ref.value}`);
    handleAdjDetailClose();
  };
  const handleDelNotesRedirect = () => {
    history.push(
      `/stock/deliverynotes?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );
    setDelNotesOpen(false);
  };
  const handleDelNotesDetailRedirect = () => {
    var ref = document.getElementById("ref");
    history.push(`/stock/deliverynotedetail?ref=${ref.value}`);
    setDelNotesDetailOpen(false);
  };
  const handleGRNRedirect = () => {
    history.push(
      `/stock/goodsreceivednotes?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );
    handleGRNListClose();
  };
  const handleGRNDetailRedirect = () => {
    var ref = document.getElementById("ref");
    history.push(`/stock/goodsreceivednotedetail?ref=${ref.value}`);
    handleGRNDetailClose();
  };

  const handleImsBySupplierAdminRedirect = () => {
    history.push(
      `/adminsales/imsbysupplier?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}&radioGroup=${radioGroup}&supp=${supplierOption.value}`
    );
    handleImsBySupplierAdminClose();
  };
  const handleImsByProductAdminRedirect = () => {
    history.push(
      `/adminsales/imsbyproduct?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&supp=${
        supplierOption.value
      }`
    );
    handleImsByProductAdminClose();
  };
  const handleImsByCustCHANAdminRedirect = () => {
    history.push(
      `/adminsales/imsbycustomerbychannel?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${
        option.value
      }&supp=${supplierOption.value}`
    );
    handleImsByCustomerChanAdminClose();
  };
  const handleImsByCustSUMAdminRedirect = () => {
    history.push(
      `/adminsales/imsbycustomersummary?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${
        option.value
      }&supp=${supplierOption.value}`
    );
    handleImsByCustomerSumAdminClose();
  };
  const handleImsByCustAdminRedirect = () => {
    history.push(
      `/adminsales/imsbycustomer?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${
        option.value
      }&supp=${supplierOption.value}`
    );
    handleImsByCustomerAdminClose();
  };

  const handleBranchCategoryRedirect = () => {
    history.push(
      `/adminsales/branchandbrandcategory?locationId=${option.value}&supp=${supplierOption.value}`
    );
    handleBranchCategoryClose();
  };
  const handleBranchSummaryRedirect = () => {
    history.push(
      `/adminsales/branchsummary?locationId=${option.value}&supp=${supplierOption.value}`
    );
    handleBranchSummaryClose();
  };
  const handleKeySummaryRedirect = () => {
    history.push(
      `/adminsales/keysummary?locationId=${option.value}&supp=${supplierOption.value}`
    );
    handleKeySummaryClose();
  };
  const handleKeyDetailRedirect = () => {
    history.push(
      `/adminsales/keydetail?locationId=${option.value}&supp=${supplierOption.value}`
    );
    handleKeyDetailClose();
  };
  const handleBranchProductRedirect = () => {
    history.push(
      `/adminsales/branchproduct?locationId=${option.value}&supp=${supplierOption.value}`
    );
    handleBranchProductClose();
  };

  const handleSalesRedirect = () => {
    history.push(
      `/adminsales/sales?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );
    handleSALESClose();
  };
  const handleSalesComparisonRedirect = () => {
    history.push(
      `/adminsales/salescomparison?from=${format(
        selectedFromDate,
        "yyyy-MM"
      )}&to=${format(selectedToDate, "yyyy-MM")}&secondfrom=${format(
        selectedSecondFromDate,
        "yyyy-MM"
      )}&secondto=${format(selectedSecondToDate, "yyyy-MM")}`
    );
    handleSALESComparisonClose();
  };
  const handleSalesByCustomersRedirect = () => {
    history.push(
      `/adminsales/salecustomer?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&supp=${
        supplierOption.value
      }&radioGroup=${radioGroup}&customerId=${option.value}`
    );
    handleSALESbyCustomerClose();
  };
  const handleAllStockSalesRedirect = () => {
    history.push(
      `/adminsales/allstocksales?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&supp=${
        supplierOption.value
      }`
    );
    handleAllStockSalesClose();
  };
  const handleStockDaysRedirect = () => {
    history.push(
      `/adminsales/stockdays?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&supp=${
        supplierOption.value
      }`
    );
    handleStockDaysClose();
  };

  const handleImsByCustomerPnLRedirect = () => {
    history.push(
      `/profitloss/imsbycustomer?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${
        option.value
      }&supp=${supplierOption.value}`
    );
    handleImsByCustomerPnLClose();
  };
  const handleImsByProductPnLRedirect = () => {
    history.push(
      `/profitloss/imsbyproduct?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&supp=${
        supplierOption.value
      }`
    );
    handleImsByProductPnLClose();
  };
  const handleImsByCustPnLRedirect = () => {
    history.push(
      `/profitloss/imsbycustpnl?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${option.value}`
    );
    handleImsByCustPnLClose();
  };
  const handleKhyberByBranchPLSRedirect = () => {
    history.push(
      `/profitloss/kbplstotal?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&radioGroup=${radioGroup}`
    );
    handleKhyberByBranchPLSClose();
  };
  const handleStockValueByVendorRedirect = () => {
    history.push(
      `/profitloss/svbyvendor?to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}&locationId=${option.value}`
    );
    handleStockValueByVendorClose();
  };
  const handleStockValueByProductRedirect = () => {
    history.push(
      `/profitloss/svbyproductlocation?to=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}&vendor=${supplierOption.value}`
    );
    handleStockValueByProductClose();
  };
  const handleCompaniesProfitWiseRedirect = () => {
    history.push(
      `/profitloss/companiesprofitwise?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&vendor=${
        supplierOption.value
      }`
    );
    handleCompaniesProfitWiseClose();
  };

  const handleMonthlyDataRedirect = () => {
    history.push(
      `/profitloss/monthlydata?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&vendor=${
        supplierOption.value
      }`
    );
    handleMonthlyDataClose();
  };

  // reports
  const handleDailyStatementRedirect = () => {
    history.push(
      `analysis/accounts/DailyCombinedStatement?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&vendor=${
        supplierOption.value
      }`
    );
    handleDailyStatementClose();
  };
  const handleDailyCombinedStatementRedirect = () => {
    history.push(
      `/accounts/dailycombinedstatement?selectedDate=${format(
        selectedDate,
        "MM/dd/yyyy"
      )}`
      // ?from=${
      //   option.value
      // }&selectedData=${format(selectedDate, "MM/dd/yyyy")}`
    );
    handleDailyCombinedStatementClose();
  };

  const handleCustomerStatementRedirect = () => {
    history.push(
      `/accounts/customerstatement?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }`
    );
    handleCustomerStatementClose();
  };

  const handleCustomerCombinedStatementRedirect = () => {
    history.push(
      `/accounts/customerstatementcombined?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&businesstype=${
        BusinessTypesOptions.value
      }`
    );
    handleCustomerCombinedStatementClose();
  };
  const handleWholeSaleInvoiceRedirect = () => {
    history.push(
      `/accounts/wholesaleinvoice?label=${option.label}&value=${
        option.value
      }&selectedData=${format(selectedDate, "MM/dd/yyyy")}`
    );
    handleWholeSaleInvoiceClose();
  };
  const handleWholeSaleLedgerRedirect = () => {
    history.push(
      `/accounts/wholesaleledger?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}`
    );

    handleWholeSaleLedgerClose();
  };
  const handleWholeSaleSummaryRedirect = () => {
    history.push(
      `/accounts/wholesalesummaryledger?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&locationId=${option.value}`
    );

    handleWholeSaleSummaryClose();
  };
  const handleGeneralLedgerRedirect = () => {
    history.push(
      `/accounts/generalledger?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleGeneralLedgerClose();
  };
  const handleBankCashSummaryRedirect = () => {
    history.push(
      `/accounts/BankCashBanksummary?selectedDate=${format(
        selectedDate,
        "MM/dd/yyyy"
      )}`
    );
    handleBankCashSummaryClose();
  };
  const handleBankLedgerSummaryDetailsCRedirect = () => {
    history.push(
      `/accounts/bankledgersummarydetails?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );

    
    handleBankLedgerSummaryDetailsClose();
  };
  const handleCategoryListRedirect = () => {
    history.push(`/inventory/new-category`);
    handleCategoryListClose();
  };

  const handleNewCategoryRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleNewCategoryClose();
  };
  const handlePricingRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handlePricingClose();
  };

  const handleProductListRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleProductListClose();
  };

  const handleMasterProductListRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleMasterProductListClose();
  };

  const handleOriginsListRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleOriginsListClose();
  };

  const handleUnitListRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleUnitListClose();
  };

  const handleBrandListRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleBrandListClose();
  };

  const handleNewBrandRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleNewBrandClose();
  };
  const handleNewUnitRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleNewUnitClose();
  };

  const handleNewOriginRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleNewOriginClose();
  };
  const handleNewProductRedirect = () => {
    history.push(
      `/inventory/new-category?from=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&to=${format(selectedToDate, "MM/dd/yyyy")}&account=${
        accountOptions.value
      }&secondaccount=${secondAccountOption.value}
      }`
    );
    handleNewProductClose();
  };

  const handleDFSRedirect = () => {
    history.push(
      `/productivity/dfs?selectedFromData=${format(
        selectedFromDate,
        "MM/dd/yyyy"
      )}&selectedtoData=${format(
        selectedToDate,
        "MM/dd/yyyy"
      )}&summary=${checked}`
    );
    setDFSOpen(false);
  };

  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }
  const { color, logo, image, logoText, routes, companyLocation } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/upgrade-to-pro") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true,
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.layout + prop.path),
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
        });

        return (
          <div>
            {prop.id === 1 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : // </NavLink>
            prop.id === 2 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleDFSOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 3 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSwbeOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 4 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleCSPOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 5 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleABSOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 6 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleProductTrackOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 7 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSIDOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 8 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleAdjustmentOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 9 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleAdjDetailOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 10 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleDelNotesOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 11 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleDelNotesDetailOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 12 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleGRNListOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 13 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleGRNDetailOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 14 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleAdjustmentOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 15 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleStmOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 16 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleStockTransferOpen}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 17 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleInvoiceSummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 18 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleInvoiceDetail}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 19 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleByMonth}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 20 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleByYear}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 21 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleByCustomer}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 22 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handlePartySummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 23 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSRC}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 24 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleIMSCust}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 25 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleIMSCustSummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 26 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleIMSChannel}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 27 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSALES}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 28 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSALESComparison}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 29 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleSALESbyCustomer}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 30 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleAllStockSALES}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 31 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleStockDays}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 32 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleBranchCategory}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 33 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleBranchSummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 34 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleKeySummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 35 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleKeyDetail}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 36 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleBranchProduct}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 37 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByCustomerAdmin}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 38 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByCustomerSumAdmin}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 39 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByCustomerChanAdmin}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 40 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByProductAdmin}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 41 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsBySupplierAdmin}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 42 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByCustomerPnL}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 43 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByProductPnL}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 44 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleImsByCustPnL}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 45 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleKhyberByBranchPLS}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 46 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleStockValueByVendor}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 47 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleStockValueByProduct}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 48 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleCompaniesProfitWise}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 49 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleMonthlyData}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 51 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenDailyStatement}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 52 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenDailyCombinedStatement}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 53 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenCustomerStatement}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 54 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenCustomerCombinedStatement}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 55 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenWholeSaleInvoice}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 56 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenWholeSaleLedger}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 57 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenWholeSaleSummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 58 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenGeneralLedger}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 59 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenBankCashSummary}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 60 ? (
              <div>
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenBankLedgerSummaryDetails}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 61 ? (
              <div>
                {/* new category */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewCategory}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 62 ? (
              <div>
                {/* Category List */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenCategoryList}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 63 ? (
              <div>
                {/* new brand */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewBrand}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 64 ? (
              <div>
                {/* Brand List */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenBrandList}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 65 ? (
              <div>
                {/* new Unit */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewUnit}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 66 ? (
              <div>
                {/* Unit List */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewCategory}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 67 ? (
              <div>
                {/* new origin */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewCategory}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 68 ? (
              <div>
                {/* Origin list */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewCategory}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 69 ? (
              <div>
                {/* new product */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenNewProduct}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 70 ? (
              <div>
                {/* master product list */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenMasterProductList}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 71 ? (
              <div>
                {/* product list */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenProductList}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : prop.id === 72 ? (
              <div>
                {/* pricing */}
                {/* <CustomModal /> */}
                <ListItem
                  button
                  onClick={handleOpenPricing}
                  className={classes.itemLink + listItemClasses}
                >
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : `` + prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </div>
            ) : (
              <NavLink
                to={prop.layout + prop.path}
                className={activePro + classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  {typeof prop.icon === "string" ? (
                    <Icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    >
                      {prop.icon}
                    </Icon>
                  ) : (
                    <prop.icon
                      className={classNames(
                        classes.itemIcon,
                        whiteFontClasses,
                        {
                          [classes.itemIconRTL]: props.rtlActive,
                        }
                      )}
                    />
                  )}
                  <ListItemText
                    primary={props.rtlActive ? prop.rtlName : prop.name}
                    className={classNames(classes.itemText, whiteFontClasses, {
                      [classes.itemTextRTL]: props.rtlActive,
                    })}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            )}
            ;
          </div>
        );
      })}
    </List>
  );
  {
    /* <SidebarNav style={{ overflow: "auto" }}>
      </SidebarNav> */
  }

  return (
    <div>
      {/* <SidebarNav style={{ overflow: "auto" }}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
            const depthlebel = 0;
             return <SubMenu item={item} key={index} depthlebel={depthlebel} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </List>
      );
      var brand = (
      <div className={classes.logo}>
      <a
        href="/admin/dashboard"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive,
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
        <br />
        {companyLocation}
      </a>
      </div>
      );
      return (
      <div>
      <Hidden mdUp implementation="css">
      </SidebarNav> */}
      {/* <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden> */}

      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="To"
                fullWidth
                clearable
                value={selectedToDate}
                placeholder="10/10/2018"
                onChange={(date) => handleToDateChange(date)}
                minDate={new Date()}
                format="MM/dd/yyyy"
              />
            </MuiPickersUtilsProvider>

            <br />
            <div style={{ float: "right" }}>
              <Button
                color="info"
                onClick={handleDownload}
                href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button>
              <Button
                color="info"
                onClick={handleDFSRedirect}
                href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                View
              </Button>
            </div>
          </Box>
        </Modal> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={swbeOpen}
        onClose={handleSwbeClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Brand"
                  onChange={brandChange}
                  defaultOptions
                  loadOptions={loadOptionsBrand}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Category"
                  onChange={categoryChange}
                  defaultOptions
                  loadOptions={loadOptionsCat}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div style={{ margin: "35px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Origin"
                  onChange={originChange}
                  defaultOptions
                  loadOptions={loadOptionsOrigin}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Min Quality"
                id="minval"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "number",
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Max Quality"
                id="maxval"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "number",
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card profile>
                <CardBody profile>
                  <strong style={{ marginTop: "-15px" }}>Expiry</strong>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          label="From"
                          fullWidth
                          clearable
                          value={selectedFromDate}
                          placeholder="10/10/2018"
                          onChange={(date) => handleFromDateChange(date)}
                          // minDate={new Date()}
                          format="MM/dd/yyyy"
                        />
                      </MuiPickersUtilsProvider>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          label="To"
                          fullWidth
                          clearable
                          value={selectedToDate}
                          placeholder="10/10/2018"
                          onChange={(date) => handleToDateChange(date)}
                          // minDate={new Date()}
                          format="MM/dd/yyyy"
                        />
                      </MuiPickersUtilsProvider>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Till Date"
                  fullWidth
                  clearable
                  value={selectedDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div style={{ margin: "10px 0 0 0" }}>
                <Select
                  cacheOptions
                  placeholder="Order By"
                  onChange={orderChange}
                  defaultOptions
                  options={orderbyOptions}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div style={{ margin: "10px 0 0 0" }}>
                <Select
                  cacheOptions
                  placeholder="Direction"
                  onChange={directionChange}
                  defaultOptions
                  options={directionOptions}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <div style={{ margin: "10px 0 0 0" }}>
                <Select
                  cacheOptions
                  placeholder="Group By"
                  onChange={groupChange}
                  defaultOptions
                  options={groupByOptions}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleSwbeDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleSwbeRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={cSPOpen}
        onClose={handleCSPClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Brand"
                  onChange={brandChange}
                  defaultOptions
                  loadOptions={loadOptionsBrand}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Category"
                  onChange={categoryChange}
                  defaultOptions
                  loadOptions={loadOptionsCat}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <div style={{ margin: "35px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Origin"
                  onChange={originChange}
                  defaultOptions
                  loadOptions={loadOptionsOrigin}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Min Quality"
                id="minval"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "number",
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <CustomInput
                labelText="Max Quality"
                id="maxval"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "number",
                }}
              />
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleCSPDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleCSPRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ABSOpen}
        onClose={handleABSClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Brand"
                  onChange={brandChange}
                  defaultOptions
                  loadOptions={loadOptionsBrand}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Category"
                  onChange={categoryChange}
                  defaultOptions
                  loadOptions={loadOptionsCat}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Origin"
                  onChange={originChange}
                  defaultOptions
                  loadOptions={loadOptionsOrigin}
                />
              </div>
            </GridItem>
          </GridContainer>

          <br />

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Till Date"
                  fullWidth
                  clearable
                  value={selectedDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <Select
                  cacheOptions
                  placeholder="Group By"
                  onChange={groupChange}
                  defaultOptions
                  options={groupByOptions}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleABSDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleABSRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ProdOpen}
        onClose={handleProdClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                {/* <AsyncSelect cacheOptions placeholder="Product" onChange={productChange} defaultOptions loadOptions={loadOptionsProduct} /> */}
                <AsyncPaginate
                  placeholder="Product"
                  loadOptions={loadOptionsProduct}
                  onChange={productChange}
                  additional={{
                    page: 1,
                  }}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleProdRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={stmOpen}
        onClose={handleStmClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleStmRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={stockTransferOpen}
        onClose={handleStockTransferClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Transfer From"
                  onChange={transferFromChange}
                  defaultOptions
                  loadOptions={loadOptionsTransferFrom}
                />
              </div>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Transfer To"
                  onChange={transferToChange}
                  defaultOptions
                  loadOptions={loadOptionsTransferTo}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleStockTransferRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={invoiceSummaryOpen}
        onClose={handleInvoiceSummaryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ margin: "20px 0 0 0" }}>
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              className={classes.formControl}
            >
              <RadioGroup
                className={classes.group}
                value={radioGroup}
                onChange={radioGroupChange}
              >
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Date"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Customer"
                    />
                  </GridItem>
                </GridContainer>
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleInvoiceSummaryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={invoiceDetailOpen}
        onClose={handleInvoiceDetailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ margin: "20px 0 0 0" }}>
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              className={classes.formControl}
            >
              <RadioGroup
                className={classes.group}
                value={radioGroup}
                onChange={radioGroupChange}
              >
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Date"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Customer"
                    />
                  </GridItem>
                </GridContainer>
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleInvoiceDetailRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={byMonth}
        onClose={handleByMonthClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ margin: "20px 0 0 0" }}>
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              className={classes.formControl}
            >
              <RadioGroup
                className={classes.group}
                value={radioGroup}
                onChange={radioGroupChange}
              >
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Date"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Customer"
                    />
                  </GridItem>
                </GridContainer>
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleByMonthRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={byYear}
        onClose={handleByYearClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ margin: "20px 0 0 0" }}>
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              className={classes.formControl}
            >
              <RadioGroup
                className={classes.group}
                value={radioGroup}
                onChange={radioGroupChange}
              >
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Date"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Customer"
                    />
                  </GridItem>
                </GridContainer>
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleByYearRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={byCustomer}
        onClose={handleByCustomerClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ margin: "20px 0 0 0" }}>
            <FormControl
              component="fieldset"
              style={{ width: "100%" }}
              className={classes.formControl}
            >
              <RadioGroup
                className={classes.group}
                value={radioGroup}
                onChange={radioGroupChange}
              >
                <GridContainer>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="0"
                      control={<Radio color="primary" />}
                      label="Date"
                    />
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6}>
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="Customer"
                    />
                  </GridItem>
                </GridContainer>
              </RadioGroup>
            </FormControl>
          </div>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleByCustomerRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={partysummary}
        onClose={handlePartySummaryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handlePartySummaryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={SRC}
        onClose={handleSRCClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleSRCRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={imsCust}
        onClose={handleIMSCustClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleIMSCustRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={imsCustSummary}
        onClose={handleIMSCustSummaryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={checkboxChange}
                      color="primary"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Month Separated"
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleIMSCustSummaryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={imsChannel}
        onClose={handleIMSChannelClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          {/* <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div style={{ "margin": "20px 0 0 0" }}>
                <AsyncSelect cacheOptions placeholder="Location" onChange={logChange} defaultOptions loadOptions={loadOptionsLoc} />
                </div>
              </GridItem>
            </GridContainer> */}
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            {/* <Button
                color="info"
                onClick={handleProdDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleIMSChannelRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={SIDOpen}
        onClose={handleSIDClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Reference No"
                id="ref"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleSIDRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={adjOpen}
        onClose={handleAdjClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          {/* <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div style={{ "margin": "10px 0 0 0" }}>

                  <AsyncSelect cacheOptions placeholder="Customer" onChange={logChange} defaultOptions loadOptions={loadOptionsCustomer} />
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <div style={{ "margin": "10px 0 0 0" }}>

                  <AsyncSelect cacheOptions placeholder="Supplier" onChange={suppChange} defaultOptions loadOptions={loadOptionsSupp} />
                </div>
              </GridItem>
            </GridContainer> */}

          {/* Had to remove these afterwards  */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "10px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Adjustment Type"
                  onChange={adjTypeChange}
                  defaultOptions
                  loadOptions={loadOptionsAdjustType}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleAdjRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={adjDetailOpen}
        onClose={handleAdjDetailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Reference No"
                id="ref"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleAdjDetailRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={DelNotesOpen}
        onClose={handleDelNotesClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleDelNotesRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={DelNotesDetailOpen}
        onClose={handleDelNotesDetailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Reference No"
                id="ref"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleDelNotesDetailRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={GRNListOpen}
        onClose={handleGRNListClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleGRNRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={GRNDetailOpen}
        onClose={handleGRNDetailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="Reference No"
                id="ref"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleGRNDetailRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={SALES}
        onClose={handleSALESClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleSalesRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={AllStockSales}
        onClose={handleAllStockSalesClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleAllStockSalesRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={SALESComparison}
        onClose={handleSALESComparisonClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <label>Primary Period</label>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <label>Comparison Period</label>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedSecondFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleSecondFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedSecondToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleSecondToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleSalesComparisonRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={SALESbyCustomer}
        onClose={handleSALESbyCustomerClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Customer"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsCustomer}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <FormControl
                  component="fieldset"
                  style={{ width: "100%" }}
                  className={classes.formControl}
                >
                  <RadioGroup
                    className={classes.group}
                    value={radioGroup}
                    onChange={radioGroupChange}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <label>Report Type</label>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="0"
                          control={<Radio color="primary" />}
                          label="Detail"
                        />
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="1"
                          control={<Radio color="primary" />}
                          label="Summary"
                        />
                      </GridItem>
                    </GridContainer>
                  </RadioGroup>
                </FormControl>
              </div>
            </GridItem>
          </GridContainer>
          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleSalesByCustomersRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={StockDays}
        onClose={handleStockDaysClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleStockDaysRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={BranchCategory}
        onClose={handleBranchCategoryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Branch"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleBranchCategoryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={BranchSummary}
        onClose={handleBranchSummaryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Branch"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleBranchSummaryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={KeySummary}
        onClose={handleKeySummaryClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Branch"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleKeySummaryRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={KeyDetail}
        onClose={handleKeyDetailClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Branch"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleKeyDetailRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={BranchProduct}
        onClose={handleBranchProductClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Branch"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleBranchProductRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByCustomerAdmin}
        onClose={handleImsByCustomerAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByCustAdminRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByCustomerSumAdmin}
        onClose={handleImsByCustomerSumAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByCustSUMAdminRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByCustomerChanAdmin}
        onClose={handleImsByCustomerChanAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByCustCHANAdminRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByProductAdmin}
        onClose={handleImsByProductAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByProductAdminRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsBySupplierAdmin}
        onClose={handleImsBySupplierAdminClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <FormControl
                  component="fieldset"
                  style={{ width: "100%" }}
                  className={classes.formControl}
                >
                  <RadioGroup
                    className={classes.group}
                    value={radioGroup}
                    onChange={radioGroupChange}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <label>Pricing Type</label>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="0"
                          control={<Radio color="primary" />}
                          label="IMS BY SUPPLIER PRICE"
                        />
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="1"
                          control={<Radio color="primary" />}
                          label="IMS BY MARKET SOLD PRICE"
                        />
                      </GridItem>
                    </GridContainer>
                  </RadioGroup>
                </FormControl>
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsBySupplierAdminRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByCustomerPnL}
        onClose={handleImsByCustomerPnLClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByCustomerPnLRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByProductPnL}
        onClose={handleImsByProductPnLClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Supplier"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByProductPnLRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={ImsByCustPnL}
        onClose={handleImsByCustPnLClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleImsByCustPnLRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={KhyberByBranchPLS}
        onClose={handleKhyberByBranchPLSClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <FormControl
                  component="fieldset"
                  style={{ width: "100%" }}
                  className={classes.formControl}
                >
                  <RadioGroup
                    className={classes.group}
                    value={radioGroup}
                    onChange={radioGroupChange}
                  >
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <label>Report Type</label>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="1"
                          control={<Radio color="primary" />}
                          label="Summary"
                        />
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="2"
                          control={<Radio color="primary" />}
                          label="Detail"
                        />
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <FormControlLabel
                          value="3"
                          control={<Radio color="primary" />}
                          label="Summary & Detail"
                        />
                      </GridItem>
                    </GridContainer>
                  </RadioGroup>
                </FormControl>
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleKhyberByBranchPLSRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={StockValueByVendor}
        onClose={handleStockValueByVendorClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Till Date"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Location"
                  onChange={logChange}
                  defaultOptions
                  loadOptions={loadOptionsLoc}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleStockValueByVendorRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={StockValueByProduct}
        onClose={handleStockValueByProductClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="Till Date"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Vendor"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleStockValueByProductRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={CompaniesProfitWise}
        onClose={handleCompaniesProfitWiseClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "auto" }}
      >
        <Box sx={styleLarge}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="From"
                  fullWidth
                  clearable
                  value={selectedFromDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleFromDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  label="To"
                  fullWidth
                  clearable
                  value={selectedToDate}
                  placeholder="10/10/2018"
                  onChange={(date) => handleToDateChange(date)}
                  // minDate={new Date()}
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div style={{ margin: "20px 0 0 0" }}>
                <AsyncSelect
                  cacheOptions
                  placeholder="Vendor"
                  onChange={suppChange}
                  defaultOptions
                  loadOptions={loadOptionsSupp}
                />
              </div>
            </GridItem>
          </GridContainer>

          <div style={{ float: "right", margin: "30px 0 0 0" }}>
            <Button
              color="info"
              onClick={handleCompaniesProfitWiseRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Monthly Data */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Monthlydata}
        onClose={handleMonthlyDataClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Opening Date"
              fullWidth
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={(date) => handleDateChange(date)}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Location"
            onChange={logChange}
            defaultOptions
            loadOptions={loadOptionsLoc}
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleMonthlyDataRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Reports */}
      {/* Daily Statements */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDailyStatement}
        onClose={handleOpenDailyStatement}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Account"
            onChange={AccountChange}
            defaultOptions
            loadOptions={loadOptionsAccount}
          />
          <div style={{ margin: "10px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Second Account"
              onChange={SecondAccountChange}
              defaultOptions
              loadOptions={loadOptionsSecondAccount}
            />
          </div>

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleDailyStatementRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Daily Combined Statement */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDailyCombinedStatement}
        onClose={handleOpenDailyCombinedStatement}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Opening Date"
              fullWidth
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={(date) => handleDateChange(date)}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          {/* <AsyncSelect
              cacheOptions
              placeholder="Location"
              onChange={logChange}
              defaultOptions
              loadOptions={loadOptionsLoc}
            /> */}

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleDailyCombinedStatementRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Customer Statement */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCustomerStatement}
        onClose={handleOpenCustomerStatement}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Account"
            onChange={AccountChange}
            defaultOptions
            loadOptions={loadOptionsAccount}
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleCustomerStatementRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Customer Combined Statement */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCustomerCombinedStatement}
        onClose={handleOpenCustomerCombinedStatement}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Business Type"
            onChange={businessTypeChange}
            defaultOptions
            loadOptions={loadOptionsBusinessType}
          />
          <br />
          <div style={{ float: "right" }}>
            {/* <Button
                color="info"
                onClick={handleDownload}
                // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
                target="_blank"
              >
                Download Excel
              </Button> */}
            <Button
              color="info"
              onClick={handleCustomerCombinedStatementRedirect}
              // href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin"
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* WholeSale Invoice */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openWholeSaleInvoice}
        onClose={handleOpenWholeSaleInvoice}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Date"
              fullWidth
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={(date) => handleDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleWholeSaleInvoiceRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* WholeSale Ledger */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openWholeSaleLedger}
        onClose={handleOpenWholeSaleLedger}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleWholeSaleLedgerRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* WholeSale Summary */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openWholeSaleSummary}
        onClose={handleOpenWholeSaleSummary}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Location"
            onChange={logChange}
            defaultOptions
            loadOptions={loadOptionsLoc}
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleWholeSaleSummaryRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* General Ledger */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openGeneralLedger}
        onClose={handleOpenGeneralLedger}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Account"
            onChange={AccountChange}
            defaultOptions
            loadOptions={loadOptionsAccount}
          />
          <div style={{ margin: "10px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Second Account"
              onChange={SecondAccountChange}
              defaultOptions
              loadOptions={loadOptionsSecondAccount}
            />
          </div>

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleGeneralLedgerRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Bank Cash Summary */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBankCashSummary}
        onClose={handleOpenBankCashSummary}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="Opening Date"
              fullWidth
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={(date) => handleDateChange(date)}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleBankCashSummaryRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Bank Ledger Summary Details */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBankLedgerSummaryDetails}
        onClose={handleOpenBankLedgerSummaryDetails}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="From"
              fullWidth
              clearable
              value={selectedFromDate}
              placeholder="10/10/2018"
              onChange={(date) => handleFromDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              label="To"
              fullWidth
              clearable
              value={selectedToDate}
              placeholder="10/10/2018"
              onChange={(date) => handleToDateChange(date)}
              // minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>

          <br />
          <br />

          <AsyncSelect
            cacheOptions
            placeholder="Account"
            onChange={AccountChange}
            defaultOptions
            loadOptions={loadOptionsAccount}
          />
          <div style={{ margin: "10px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Second Account"
              onChange={SecondAccountChange}
              defaultOptions
              loadOptions={loadOptionsSecondAccount}
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Summary"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleBankLedgerSummaryDetailsCRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* New Category */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNewCategory}
        onClose={handleOpenNewCategory}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Title"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <AsyncSelect
            cacheOptions
            placeholder="Parent Category"
            onChange={ParentCategory}
            defaultOptions
            loadOptions={loadOptionsParentCategory}
          />

          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Description"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <br />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Shared"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleNewCategoryRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Category List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBankLedgerSummaryDetails}
        onClose={handleOpenCategoryList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleCategoryListRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* New Brand */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNewBrand}
        onClose={handleOpenNewBrand}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Title"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Description"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <br />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Shared"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleNewBrandRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Brand List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBrandList}
        onClose={handleOpenBrandList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleBrandListRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* New Unit */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNewUnit}
        onClose={handleOpenNewUnit}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Title"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Description"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <br />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Shared"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleNewUnitRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Unit List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openUnitList}
        onClose={handleOpenUnitList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleUnitListRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* New Origin */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNewOrigin}
        onClose={handleOpenNewOrigin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Title"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Description"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <br />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Shared"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleNewOriginRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Origins List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openOriginsList}
        onClose={handleOpenOriginsList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleOriginsListRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>

      {/* New Product */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openNewProduct}
        onClose={handleOpenNewProduct}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Title"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Product code"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Barcode"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>

          <AsyncSelect
            cacheOptions
            placeholder="Category"
            onChange={ParentCategory}
            defaultOptions
            loadOptions={loadOptionsParentCategory}
          />
          <AsyncSelect
            cacheOptions
            placeholder="Sub Category"
            onChange={SubCategory}
            defaultOptions
            loadOptions={loadOptionsSubCategory}
          />
          <AsyncSelect
            cacheOptions
            placeholder="Brand"
            onChange={brandChange}
            defaultOptions
            loadOptions={loadOptionsBrand}
          />

          <GridItem xs={12} sm={12} md={12}>
            <AsyncSelect
              cacheOptions
              placeholder="Supplier Company"
              onChange={supplierCompanyChange}
              defaultOptions
              loadOptions={loadOptionsBrand}
            />
            <AsyncSelect
              cacheOptions
              placeholder="Origin"
              onChange={originChange}
              defaultOptions
              loadOptions={loadOptionsOrigin}
            />
            <AsyncSelect
                    cacheOptions
                    placeholder="Brand"
                    onChange={brandChange}
                    defaultOptions
                    loadOptions={loadOptionsBrand}
                  />

              <GridItem xs={12} sm={12} md={12}>
              <AsyncSelect
                    cacheOptions
                    placeholder="Supplier Company"
                    onChange={supplierCompanyChange}
                    defaultOptions
                    loadOptions={loadOptionsSupplierCompany}
                  />
                <AsyncSelect
                    cacheOptions
                    placeholder="Origin"
                    onChange={originChange}
                    defaultOptions
                    loadOptions={loadOptionsOrigin}
                  />
              </GridItem>
            <br />
            <br />

            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={checkboxChange}
                  color="primary"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Active"
            />
          </GridItem>
          <br />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Active"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkboxChange}
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Shared"
          />

          <br />
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleNewProductRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Master Product List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openMasterProductList}
        onClose={handleOpenMasterProductList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleMasterProductListRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Product List */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openProductList}
        onClose={handleOpenProductList}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handleProductListRedirect}
              target="_blank"
            >
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Pricing */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openPricing}
        onClose={handleOpenPricing}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <div style={{ float: "right" }}>
            <Button
              color="info"
              onClick={handlePricingRedirect}
              target="_blank"
            >
              View
            </Button>
          </div>
        </Box>
      </Modal>
    </div>

    // </div>
  );
}

// Sidebar.propTypes = {
//   rtlActive: PropTypes.bool,
//   handleDrawerToggle: PropTypes.func,
//   bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
//   logo: PropTypes.string,
//   image: PropTypes.string,
//   logoText: PropTypes.string,
//   companyLocation: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object),
//   open: PropTypes.bool,
// };
