import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import { Grid } from "@mui/material";
import routes from "routes";
import Cards from "./card/card";
import Main from "./maincard/main";
// import { Form } from "reactstrap";

function Filter() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route1: "/signin",
          route2: "/signup",
          label1: "Login",
          label2: "Sign Up",
          color: "info",
        }}
        sticky
      />
      <table display="flow">
        <tr>
          <td>
            <Grid mt={20}>
              <Cards
                name="  Datatype"
                lab1="  Simulated Lidar data"
                lab2="  Field Lidar data,"
                lab3="   3D model"
              />
              <Cards name="   Sensor types" lab1="  ALS" lab2="  MLS" lab3="  TLS" />
              <Cards name="   Attribute" lab1="   Intensity" lab2="   RGB" lab3="   etc" />
              <Cards name="   Attribute" lab1="   Intensity" lab2="   RGB" lab3="   etc" />
              <Cards name="   Attribute" lab1="   Intensity" lab2="   RGB" lab3="   etc" />
            </Grid>
          </td>
          <td>
            <Main />
          </td>
        </tr>
      </table>
    </>
  );
}
export default Filter;
