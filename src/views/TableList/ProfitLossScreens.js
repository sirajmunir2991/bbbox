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
import dummyData from "services/dummy-data";

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

export const imsByCustomer = (props) => {

 
    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let supplierId = new URLSearchParams(props.location.search).get("supp");
        let locationId = new URLSearchParams(props.location.search).get("locationId");

        tableService.IMSBYCUSTADMIN(from, to,supplierId,locationId).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

    
}
export const imsByCustomerPnL = (props) => {


    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let locationId = new URLSearchParams(props.location.search).get("locationId");

        tableService.ImsCustomerRetailPNLSummary(from, to,locationId).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}
export const stockValueVendor = (props) => {

    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let to = new URLSearchParams(props.location.search).get("to");
        let locationId = new URLSearchParams(props.location.search).get("locationId");

        tableService.stockValueVendor( to,locationId).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}

export const stockValueProductLocation = (props) => {

    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let to = new URLSearchParams(props.location.search).get("to");
        let vendor = new URLSearchParams(props.location.search).get("vendor");

        tableService.stockValueProductLocation( to,vendor).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}
export const companiesProfitWise = (props) => {

    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let vendor = new URLSearchParams(props.location.search).get("vendor");

        tableService.companiesProfitWise( from,to,vendor).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}
export const monthlyData = (props) => {

    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let vendor = new URLSearchParams(props.location.search).get("vendor");

        tableService.IMSBYCUSTCHANNELADMIN( from,to,vendor).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}


export const imsByProduct = (props) => {


    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let supplierID = new URLSearchParams(props.location.search).get("supp");

        tableService.IMSProduct(from, to,supplierID).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}
export const khyberByBranchPLS = (props) => {

    const [isData, setIsData] = useState(false);
    const [allData,setAllData] = useState("");

    const classes = useStyles();
    //   let label = new URLSearchParams(props.location.search).get("label");

    // var keys = [];

    useEffect(() => {
        let from = new URLSearchParams(props.location.search).get("from");
        let to = new URLSearchParams(props.location.search).get("to");
        let bySupplierPrice = new URLSearchParams(props.location.search).get("radioGroup");

        tableService.khyberByBranchPLS(from, to,bySupplierPrice).then((res) => {
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>{props.name}</h4>
                        <p className={classes.cardCategoryWhite}>
                            {/* Islamabad W/H(1) */}
                        </p>
                    </CardHeader>
                    <CardBody>
                        {!isData ? <div style={{ textAlign: "center" }}>
                           <Loader/></div> :

                            // <DataTable tableHead={keys ? keys : []}
                            //     tableData={dataArrayMain ? dataArrayMain : []} />
                            <iframe srcDoc={allData} style={{border:"none",width:"100%",height:"500px"}}></iframe>

                        }
                        {/* <Table
              tableHeaderColor="info"
              tableHead={props.data ? props.data.tableHead : []}
              tableData={props.data ? props.data.tableData : []}
            /> */}
                    </CardBody>
                </Card>
            </GridItem>


        </GridContainer>
    );

}
