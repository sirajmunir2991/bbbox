/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Analytics from "layouts/Analytics.js";
import Inventory from "layouts/Inventory.js";
import Catalog from "layouts/Catalog.js";
import RTL from "layouts/RTL.js";
import Dashboard from "layouts/Dashboard.js";
import Stock from "layouts/Stock.js";
import RetailSales from "layouts/RetailSales.js";
import SalesIndex from "layouts/SalesIndex.js";
import SalesSummary from "layouts/SalesSummary.js";
import General from "layouts/General.js";
import ImsByCustomer from "layouts/ImsByCustomer.js";
import Productivity from "layouts/Productivity.js";
import Purchases from "layouts/Purchases.js";
import AdminSales from "layouts/adminSales.js";
import ProfitLoss from "layouts/profitLoss.js";
import Accounts from "layouts/Accounts.js";
import LoginPage from "./views/Login/LoginPage.js";
import "assets/css/material-dashboard-react.css?v=1.10.0";
import Trash from "components/Sidebar/Trash";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {JSON.parse(localStorage.getItem("user")) && <Trash />}
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/stock" component={Stock} />
        <Route path="/retail" component={RetailSales} />
        <Route path="/salesindex" component={SalesIndex} />
        <Route path="/salessummary" component={SalesSummary} />
        <Route path="/general" component={General} />
        <Route path="/ims" component={ImsByCustomer} />
        <Route path="/purchases" component={Purchases} />
        <Route path="/productivity" component={Productivity} />
        <Route path="/adminsales" component={AdminSales} />
        <Route path="/profitloss" component={ProfitLoss} />
        <Route path="/accounts" component={Accounts} />
        {/* Inventory */}
        <Route path="/inventory" component={Inventory} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/accounts" component={Accounts} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/rtl" component={RTL} />
        <Route path="/login" component={LoginPage} />
        <Redirect from="/" to="/admin" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
