import React, { Fragment, useEffect, useState } from "react";
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
import tableService from "services/tables.service";
import Loader from "components/Loader/Loader.js";
import parse from "html-react-parser";

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

export default function UnitList(props) {
  const [dataArrayMain, setDataArrayMain] = useState([]);
  const [keys, setKeys] = useState([]);
  const [isData, setIsData] = useState(false);
  const [allData, setAllData] = useState("");

  const classes = useStyles();
  var dataArray = [];
  //   let label = new URLSearchParams(props.location.search).get("label");

  // var keys = [];

  const columns = [
    "Title",
    {
      name: "Status",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>{value ? "Active" : "Inactive"}</div>
        ),
      },
    },
  ];

  useEffect(() => {
    tableService
      .unitList()
      .then((res) => {
        const data = JSON.parse(res);
        const idk = JSON.parse(data.Data);
        if (idk.length != 0) {
          let categories = [];
          idk.map((item) => {
            let avvv = [];
            avvv.push(item.title);
            avvv.push(item.active);
            categories.push(avvv);
          });
          // console.log("dehwnfgwegewg", categories);
          setAllData(categories);
        }
        setIsData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>{props.name}</h4>
            <p className={classes.cardCategoryWhite}>
              {/* Islamabad W/H(1) */}
            </p>
          </CardHeader>
          <CardBody>
            {!isData ? (
              <div style={{ textAlign: "center" }}>
                <Loader />
              </div>
            ) : (
              <Fragment>
                <DataTable
                  data={allData}
                  title={"Unit List"}
                  columns={columns}
                />
              </Fragment>
            )}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
