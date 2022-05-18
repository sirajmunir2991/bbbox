import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// import People from "@material-ui/icons/People";
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import Select from "react-select";

import Danger from "components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import { login } from "actions/auth";

import styles from "assets/jss/material-dashboard-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import companyService from "services/company.service";
// import CustomModal from "components/CustomModal/CustomModal";

const useStyles = makeStyles(styles);

var options = [];

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [error, setError] = React.useState("");
  const dispatch = useDispatch();

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [option, setOption] = useState("");
  function logChange(val) {
    console.log("Dasda");
    setOption(val);
  }

  const handleLogin = () => {
    setError("");
    var userName = document.getElementById("email");
    var password = document.getElementById("pass");

    if (userName.value === "") {
      setError("UserName must not be empty");
    } else if (password.value === "") {
      setError("Password must not be empty");
    } else if (option === "") {
      setError("Select company");
    } else {
      dispatch(login(userName.value, password.value, option.value))
        .then(() => {
          window.location.replace("/admin");
        })
        .catch((err) => {
          setError("Invalid Email or Password");
        });
    }
  };

  useEffect(() => {
    companyService.companyName().then((res) => {
      // console.log("----------", JSON.parse(res.data.Data));
      const data = JSON.parse(res.data.Data);
      data.forEach((element) => {
        options.push({
          value: element.id,
          label: element.title,
        });
      });
    });
  }, []);

  // const { ...rest } = props;
  return (
    <div>
      {/* <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  {/* <p className={classes.divider}>Or Be Classical</p> */}
                  <CardBody>
                    <CustomInput
                      labelText="Username"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <br />
                    <br />
                    <br />
                    <Select
                      name="form-field-name"
                      // defaultValue={value}
                      placeholder="Company"
                      options={options}
                      onChange={logChange}
                    />

                    {/* <CustomSelect
                      labelText="Company"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        // endAdornment: (
                        //   <InputAdornment position="end">
                        //     <Icon className={classes.inputIconsColor}>
                        //       lock_outline
                        //     </Icon>
                        //   </InputAdornment>
                        // ),
                        autoComplete: "off",
                      }}
                      options = {
                        "Tatara Traders",
                        "Khyber Traders"
                      }
                    /> */}

                    {error && (
                      <div style={{ textAlign: "center", color: "red" }}>
                        <Danger>
                          <Warning />
                        </Danger>

                        {error}
                      </div>
                    )}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={handleLogin}
                    >
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
