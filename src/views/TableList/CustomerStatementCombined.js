import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import DataTable from "components/DataTable/DataTable.js";
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
  const [allData, setAllData] = useState("");

  const classes = useStyles();
  var dataArray = [];
  //   let label = new URLSearchParams(props.location.search).get("label");

  // var keys = [];

  useEffect(() => {
    let supplier = new URLSearchParams(props.location.search).get("supp");
    let brand = new URLSearchParams(props.location.search).get("brand");
    let category = new URLSearchParams(props.location.search).get("category");
    let origin = new URLSearchParams(props.location.search).get("origin");
    let selectedDate = new URLSearchParams(props.location.search).get(
      "selectedDate"
    );
    let group = new URLSearchParams(props.location.search).get("group");

    tableService
      .ABS(category, brand, supplier, origin, selectedDate, group)
      .then((res) => {
        console.log(res.data);
        if (res.data.length != 0) {
          // res.data.forEach(element => {
          //     dataArray.push(
          //         Object.keys(element).map(val => element[val])
          //     )
          // });
          // setDataArrayMain(dataArray)
          // setKeys(Object.keys(res.data[0]));
          // console.log(keys);
          // console.log(dataArray);
          setAllData(res.data);
        }
        setIsData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // <GridContainer>
    <Paper className="container">
      {/* <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
            <TableCell numeric>Fat (g)</TableCell>
            <TableCell numeric>Carbs (g)</TableCell>
            <TableCell numeric>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table> */}
      <table style={{ width: "100%", border: "1px solid black" , borderCollapse:"collapse"}}>
        <thead style={{ display:"table-header-group" }}>
          <tr style={{ border: "1px solid black" }}>
            <th>sr#</th>
            <th colspan="6">Party</th>
            <th colspan="1">Opening Balance</th>
            <th colspan="1">Debit</th>
            <th colspan="1">Credit</th>
            <th colspan="1">Closing Balance</th>
          </tr>
        </thead>

      </table>
    </Paper>

    // </GridContainer>
  );
}
