import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import DataTable from "components/DataTable/DataTable.js";
import OpeningStockService from "services/openingStock.service";
import Loader from "components/Loader/Loader.js";
import parse from "html-react-parser";
import Button from "components/CustomButtons/Button.js";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import CustomInput from "components/CustomInput/CustomInput.js";
import AsyncSelect from "react-select/async";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, OutlinedInput, TextField } from "@material-ui/core";

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function NewSaleReturn(props) {
  var categoryOptions = [];
  var brandOptions = [];
  var subCategoryOptions = [];
  var supplierCompanyOptions = [];
  var originOptions = [];
  var parentCategoryOptions = [];
  var subCategoryOptions = [];
  var brandOptions = [];
  var customerOptions = [];
  var categoryOptions = [];
  var originOptions = [];
  var supplierCompanyOptions = [];
  var orderTakerOptions = [];

  // const [dataArrayMain, setDataArrayMain] = useState([]);
  // const [keys, setKeys] = useState([]);
  const [isData, setIsData] = useState(false);
  const [allData, setAllData] = useState("");
  const classes = useStyles();
  const [customerOption, setCustomerOption] = useState("");
  const [orderTakerOption, setOrderTakerOption] = useState("");
  const [SalesPersonOption, setSalesPersonOption] = useState("");

  var dataArray = [];
  let label = new URLSearchParams(props.location.search).get("label");

  // var keys = [];

  useEffect(() => {
    let selectedDate = new URLSearchParams(props.location.search).get(
      "selectedData"
    );
    let locationId = new URLSearchParams(props.location.search).get("value");
    OpeningStockService.OpeningStock(selectedDate, locationId)
      .then((res) => {
        console.log(res.data);

        if (res.data.length != 0) {
          setAllData(res.data);

          // res.data.forEach(element => {
          //   dataArray.push(
          //     Object.keys(element).map(val => element[val])
          //   )
          // });
          // setDataArrayMain(dataArray)
          // setKeys(Object.keys(res.data[0]));
          // console.log(keys);
          // console.log(dataArray);
        }
        setIsData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function customerChange(val) {
    setCustomerOption(val);
  }
  function orderTakerChange(val) {
    setOrderTakerOption(val);
  }
  function SalesPersonChange(val) {
    setSalesPersonOption(val);
  }
  async function loadOptionsOrderTaker() {
    const response = await CommonService.Customer();
    await response.data.Data.forEach((element) => {
      orderTakerOptions.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return orderTakerOptions;
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


  async function loadOptionsSalesPerson() {
    const response = await commonService.SubCategory();
    await response.data.Data.forEach((element) => {
      SalesPersonOption.push({
        value: element.Id,
        label: element.Title,
      });
    });
    return SalesPersonOption;
  }
  return (
    //   {/* new sale return*/}
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Save & close</Button>
          <Button color="info">Save & New</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <div style={{ margin: "28px 0 0 0" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="Date"
                fullWidth
                clearable
                // value={selectedDate}
                placeholder="10/10/2018"
                format="MM/dd/yyyy"
              />
            </MuiPickersUtilsProvider>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <div style={{ margin: "35px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Customer"
              onChange={customerChange}
              defaultOptions
              loadOptions={loadOptionsCustomer}
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <div style={{ margin: "35px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Order Taker"
              onChange={orderTakerChange}
              defaultOptions
              loadOptions={loadOptionsOrderTaker}
            />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <div style={{ margin: "35px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Choose Sales Person"
              onChange={SalesPersonChange}
              defaultOptions
              loadOptions={loadOptionsSalesPerson}
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={1}>
          <div style={{ margin: "35px 0 0 0" }}>
            <Button color="info">Add</Button>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <div style={{ margin: "35px 0 0 0" }}>
            <Button color="info">Delete</Button>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Barcode"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <Card>
        <GridContainer>
          <GridItem xs={12} sm={12} md={9}>
            <CustomInput
              labelText="Details"
              id="ref"
              formControlProps={{
                fullWidth: true,
              }}
            />
          </GridItem>
          <GridContainer>
            <div style={{ marginLeft: "5px" }}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
              >
                <CustomInput
                  labelText="Amount Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
                  }}
                />
                <CustomInput
                  labelText="Received By"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Total Unit"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
                  }}
                />
              </Grid>
            </div>
          </GridContainer>
        </GridContainer>
      </Card>
    </>
  );
}
