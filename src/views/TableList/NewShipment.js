import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Grid from '@material-ui/core/Grid';
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
import { OutlinedInput, TextField } from "@material-ui/core";

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
    <>
      {/* New Shipment */}

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Save & close</Button>
          <Button color="info">Save & New</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <div style={{ margin: "28px 0 0 0" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="Ship date"
                fullWidth
                clearable
                placeholder="10/10/2018"
                format="MM/dd/yyyy"
              />
            </MuiPickersUtilsProvider>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Container No"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <div style={{ margin: "28px 0 0 0" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="To"
                fullWidth
                clearable
                placeholder="10/10/2018"
                format="MM/dd/yyyy"
              />
            </MuiPickersUtilsProvider>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <div style={{ margin: "35px 0 0 0" }}>
            <AsyncSelect
              cacheOptions
              placeholder="Shipment mode"
              defaultOptions
            />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Shipper"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Shipper Number"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Booking Number"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="number of cartons"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "number",
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Container Size"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Origin"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Part of Load"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Destination"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Port of Discharge"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <CustomInput
            labelText="Agent"
            id="ref"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <Card>
        <GridItem xs={12} sm={12} md={12}>
          <Button color="info">Add</Button>
          <Button color="info">Delete</Button>
          <h1>Add Table here</h1>
        </GridItem>
      </Card>
      {/* <Card>
    <GridItem xs={12} sm={12} md={9}>
      <CustomInput
        labelText="Details"
        id="ref"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={2}>
      <CustomInput
        labelText="Service Charges"
        id="ref"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={2}>
      <CustomInput
        labelText="Total"
        id="ref"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
  </Card> */}
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
                  labelText="Service Charges"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
                <CustomInput
                  labelText="Total"
                  id="ref"
                  formControlProps={{
                    fullWidth: true,
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
