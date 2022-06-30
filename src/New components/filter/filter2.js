import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import React from "react";
import { Grid, Switch, FormControlLabel, FormGroup } from "@mui/material";
import routes from "routes";
import { useNavigate } from "react-router-dom";
import Cards from "./card/card";
import Main from "./maincard/main";
import Downloadcard from "./download card/download";

function Filter2() {
  const navigate = useNavigate();
  const checked = false;
  const [labels, setLabels] = React.useState("all");
  const [env, setEnv] = React.useState("all");
  const [datatype, setDatatype] = React.useState("all");
  const [pointrecord, setPointrecord] = React.useState("all");
  const [terrain, setTerrain] = React.useState("all");
  const [sensor, setSensor] = React.useState("all");
  const [charge, setCharge] = React.useState("all");
  const [dataDensity, setDataDensity] = React.useState("all");
  const [accuracy, setAccuracy] = React.useState("all");

  React.useEffect(() => {
    console.log(checked);
  }, [checked, env, datatype, pointrecord, terrain, sensor, charge, dataDensity, accuracy]);

  const handleChange = (event) => {
    event.preventDefault();
    navigate("/filter/segmented");
  };
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
          control={<Switch checked={checked} onChange={handleChange} />}
          label={checked ? "Segmented files only" : "IO files only"}
          sx={{ position: "relative", left: 100, top: 150, bgColor: "info" }}
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid mt={20} xs={2}>
          <Cards
            name="  Labels"
            options={["A", "B", "C", "all"]}
            selected={labels}
            onChange={setLabels}
          />
          <Cards
            name="  Environment"
            options={["clear", "rainy", "foggy", "dusty", "all"]}
            selected={env}
            onChange={setEnv}
          />
          <Cards
            name="  Datatype"
            options={["field", "simulated", "all"]}
            selected={datatype}
            onChange={setDatatype}
          />
          <Cards
            name="  Point Record"
            options={["xyz", "xyzl", "xyzrgb", "xyzlrgb", "all"]}
            selected={pointrecord}
            onChange={setPointrecord}
          />
          <Cards
            name="  Terrain"
            options={["urban", "semi-urban", "rural", "forest", "all"]}
            selected={terrain}
            onChange={setTerrain}
          />
          <Cards
            name="  Sensor types"
            options={["als", "mls", "tls", "uls", "all"]}
            selected={sensor}
            onChange={setSensor}
          />
          <Cards
            name="  Charge"
            options={["Free", "Paid", "all"]}
            selected={charge}
            onChange={setCharge}
          />
          <Cards
            name="  Accuracy"
            options={["0-5cm", "5-10cm", "10-15cm", "15-20cm", "20-abovecm", "all"]}
            selected={accuracy}
            onChange={setAccuracy}
          />
          <Cards
            name="  Data Density"
            options={["<1", "1-5", "5-10", "10-15", "15-25", "25-50", "above50", "all"]}
            selected={dataDensity}
            onChange={setDataDensity}
          />
        </Grid>
        <Grid mt={20} xs={2}>
          <Main
            checked={checked}
            filterParams={{
              env,
              datatype,
              pointrecord,
              terrain,
              sensor,
              charge,
              dataDensity,
              accuracy,
            }}
          />
        </Grid>
        <Grid mt={2} xs={2} ml={110}>
          <Downloadcard
            name="Download"
            btnName={["Download selected", "Download All", "Download in this page"]}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default Filter2;
