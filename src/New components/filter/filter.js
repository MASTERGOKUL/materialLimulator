import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import { Grid, Switch, FormControlLabel, FormGroup } from "@mui/material";
import routes from "routes";
import Cards from "./card/card";
import Main from "./maincard/main";
import details from "./maincard/maincarddetails";
import Downloadcard from "./download card/download";

// http://143.110.249.208:3000/items/pcd_instance?fields=*,io_files.directus_files_id&search=chand
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
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label"
          sx={{ position: "relative", left: 100, top: 150, bgColor: "info" }}
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid mt={20} xs={2}>
          <Cards
            name="  Environment"
            options={["clear", "rainy", "foggy", "dusty", "all"]}
            selected="all"
          />
          <Cards name="  Datatype" options={["field", "simulated", "all"]} selected="all" />
          <Cards
            name="  Point Record"
            options={["xyz", "xyzl", "xyzrgb", "xyzlrgb", "all"]}
            selected="all"
          />
          <Cards
            name="  Terrain"
            options={["urban", "semi-urban", "rural", "forest", "all"]}
            selected="all"
          />
          <Cards
            name="  Sensor types"
            options={["als", "mls", "tls", "uls", "all"]}
            selected="all"
          />
          <Cards name="  Charge" options={["Free", "Paid", "all"]} selected="Free" />
          <Cards
            name="  Accuracy"
            options={["0-5cm", "5-10cm", "10-15cm", "15-20cm", "20-abovecm", "all"]}
            selected="all"
          />
          <Cards
            name="  Data Density"
            options={["<1", "1-5", "5-10", "10-15", "15-25", "25-50", "above50", "all"]}
            selected="all"
          />
        </Grid>
        <Grid mt={20} xs={2}>
          <Main results={details} />
        </Grid>
        <Grid mt={2} xs={2} ml={110}>
          <Downloadcard
            name="Download"
            btnName={["Download All", "Download in this page", "download selected"]}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default Filter;
