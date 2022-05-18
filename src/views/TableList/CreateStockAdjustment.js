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

export default function TableList(props) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [option, setOption] = useState("");

  var categoryOptions = [];
  var brandOptions = [];
  var subCategoryOptions = [];
  var supplierCompanyOptions = [];
  var originOptions = [];
  var locOptions = [];

  function logChange(val) {
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
  return (
    <>
      {/* new product */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Save & close</Button>
          <Button color="info">Save & New</Button>
        </GridItem>
      </GridContainer>
      <div style={{ margin: "10px 0 0 0" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
          <CustomInput
                  labelText="Subject"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                  }}
                />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div style={{ marginTop: "39px" }}>
              <AsyncSelect
                cacheOptions
                placeholder="Type"
                // onChange={logChange}
                defaultOptions
                // loadOptions={loadOptionsLoc}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div style={{ marginTop: "10px" }}>
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
          <h1>Add table here</h1>
        </Card>
      </div>
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
                  labelText="Purchase Net Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
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
