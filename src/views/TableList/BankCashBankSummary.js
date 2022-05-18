import React, { useEffect, useState, Fragment } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import DataTable from "components/data-table/index.js";
import DataTable from "components/DataTable/DataTable";
import tableService from "services/tables.service";
import Loader from "components/Loader/Loader.js";
import parse from "html-react-parser";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

export default function DailyStatement(props) {
  const [dataArrayMain, setDataArrayMain] = useState([]);
  const [keys, setKeys] = useState([]);
  const [isData, setIsData] = useState(false);
  const [allData, setAllData] = useState([]);

  const classes = useStyles();
  var dataArray = [];
  var products = [
    {
      id: 1,
      name: "Product1",
      price: 120,
    },
    {
      id: 2,
      name: "Product2",
      price: 80,
    },
  ];
  //   let label = new URLSearchParams(props.location.search).get("label");

  // var keys = [];

  const columns = [
    "Banks",
    "Peshawar Retail",
    "Islamabad Retail",
    "Karachi Wholesale",
    "LHR SHahalam Wholesale",
    "LHR KT MARKETING",
  ];

  useEffect(() => {
    let selectedDate = new URLSearchParams(props.location.search).get(
      "selectedDate"
    );

    tableService
      .BCBS(selectedDate)
      .then((res) => {
        console.log("res", res.data);
        if (res.data.length != 0) {
          let cashData = ["Cash"];
          res.data.cashData.map((item) => {
            cashData.push(item.Amount);
          });
          let banksData = [];
          res.data.allBanks.map((item) => {
            const data = item.BankTitle;
            banksData.push([data]);
          });
          setAllData([cashData, ...banksData]);
          console.log("[...cashData, ...banksData]", [
            ...cashData,
            ...banksData,
          ]);
        }
        setIsData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Fragment>
      <DataTable
        data={allData}
        title={"Branch Cash/Bank Summary"}
        columns={columns}
      />
    </Fragment>
  );
}
