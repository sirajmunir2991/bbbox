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

      {/* Purchase Orders List */}
      <GridContainer>
       <h1>Purchase Orders List </h1>
      </GridContainer>
    </>
  );
}
