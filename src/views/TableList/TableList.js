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
var supplierCompanyOptions = [];
var orderTakerOptions = [];

function logChange(val) {
  setOption(val);
}
function orderTakerChange(val) {
  setOption(val);
}
function categoryChange(val) {
  setcategoryOption(val);
}
function brandChange(val) {
  setbrandOption(val);
}
function SubCategory(val) {
  setOption(val);
}
function supplierCompanyChange(val) {
  setOption(val);
}
function originChange(val) {
  setoriginOption(val);
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
export default function TableList(props) {
  var categoryOptions = [];
  var brandOptions = [];
  var subCategoryOptions = [];
  var supplierCompanyOptions = [];
  var originOptions = [];

  // const [dataArrayMain, setDataArrayMain] = useState([]);
  // const [keys, setKeys] = useState([]);
  const [isData, setIsData] = useState(false);
  const [allData, setAllData] = useState("");
  const classes = useStyles();
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
  
  return (
    //     <GridContainer>
    //       <GridItem xs={12} sm={12} md={12}>
    //         <Card>
    //           <CardHeader color="info">
    //             <h4 className={classes.cardTitleWhite}>{props.name}</h4>
    //             <p className={classes.cardCategoryWhite}>
    //               comment this islamabad
    //               Islamabad W/H(1)
    //             </p>
    //           </CardHeader>
    //           <CardBody>
    //             {!isData ? <div style={{ textAlign: "center" }}>
    //               <Loader/></div> :
    // comment this datatable
    //               <DataTable title={label} tableHead={keys ? keys : []}
    //                 tableData={dataArrayMain ? dataArrayMain : []} />
    //               <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}>

    //               </iframe>

    //             }
    //             comment this table
    //             <Table
    //               tableHeaderColor="info"
    //               tableHead={props.data ? props.data.tableHead : []}
    //               tableData={props.data ? props.data.tableData : []}
    //             />
    //           </CardBody>
    //         </Card>
    //       </GridItem>

    //     </GridContainer>

    <>
      {/* Create sale order */}
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
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Reference Code"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <div style={{ margin: "35px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Customer"
              onChange={logChange}
              defaultOptions
              loadOptions={loadOptionsCustomer}
            />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
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
      </GridContainer>
      <Card>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Add</Button>
          <Button color="info">Delete</Button>
        </GridItem>
        <h1>Add Table here</h1>
      </Card>
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
                {/* <GridItem xs={12} sm={12} md={10}> */}
                <CustomInput
                  labelText="Net Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                {/* </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={12}> */}
                <CustomInput
                  labelText="Sales Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                {/* </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={12}> */}
                <CustomInput
                  labelText="Discount"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                {/* </GridItem> */}
                {/* <GridItem xs={12} sm={12} md={12}> */}
                <CustomInput
                  labelText="Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                {/* </GridItem> */}
              </Grid>
            </div>
          </GridContainer>
        </GridContainer>
      </Card>

      
    </>
  );
}
