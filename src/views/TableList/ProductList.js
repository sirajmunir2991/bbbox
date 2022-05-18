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

export default function ProductList(props) {

    const [dataArrayMain, setDataArrayMain] = useState([]);
    const [keys, setKeys] = useState([]);
    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    var dataArray = [];
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let supplier = new URLSearchParams(props.location.search).get("supp");
        let brand = new URLSearchParams(props.location.search).get("brand");
        let category = new URLSearchParams(props.location.search).get("category");
        let origin = new URLSearchParams(props.location.search).get("origin");
        let selectedDate = new URLSearchParams(props.location.search).get("selectedDate");
        let group = new URLSearchParams(props.location.search).get("group");

        tableService.ABS(category, brand, supplier, origin,selectedDate,group).then((res) => {
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
            setIsData(true)

        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <GridContainer>
            <h1>Product List</h1>
        </GridContainer>
    );
}
