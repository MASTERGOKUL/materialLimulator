import { Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";

/* eslint-disable */
function Cards({ name, lab1, lab2, lab3 }) {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = () => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  return (
    <div item xs={0} sm={0} md={0} lg={0} xl={3} ml={{ xs: 0, lg: 0 }} height="auto">
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="flex"
        flexDirection="column"
        justifyContent=""
        mt={{ xs: 5, sm: 5, md: 5 }}
        mb={{ xs: 5, sm: 5, md: 5 }}
        mx={5}
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          borderRadius="lg"
          p={2}
          mx={2}
          mt={-3}
        >
          <MKTypography variant="h3" color="white">
            {name}
          </MKTypography>
        </MKBox>
        <MKBox p={7}>
          <MKBox width="100%" component="form" method="post" autocomplete="off" mx={15}>
            <Grid container spacing={0}>
              <Grid item xs={0} md={-55} mx={-15}>
                <h4>
                  <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                        }
                        label={lab1}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={jason} onChange={handleChange} name="jason" />
                        }
                        label={lab2}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                        }
                        label={lab3}
                      />
                    </FormGroup>
                  </FormControl>
                </h4>
              </Grid>
            </Grid>
          </MKBox>
        </MKBox>
      </MKBox>
    </div>
  );
}
export default Cards;
