import { Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";

/* eslint-disable */
function Cards({ name, options, selected, onChange }) {
  const [show, setShow] = React.useState(false);
  const handleChange = (e, option) => {
    e.preventDefault();
    onChange(option);
  };
  React.useEffect(() => {}, [selected]);
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
          mx={show?2:0}
          mt={-3}
          onClick={() => setShow(!show)}
        >
          <MKTypography variant="h5" color="white"  >
            {name}
          </MKTypography>
        </MKBox>
        {/*hiding and unding div element*/ }
        {show && <>
          <MKBox pl={7} >
            <MKBox width="100%" component="form" method="post" autocomplete="off" mx={10}>
              <Grid container spacing={0}>
                <Grid item xs={0} md={-55} mx={-15}>
                  <h5>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                      <FormGroup>
                        {options.map((option, index) => {
                          return (
                            <FormControlLabel
                              key={index.toString()}
                              control={
                                <Checkbox checked={selected === option ? true : false} onChange={(e) => handleChange(e, option)} name="gilad" />
                              }
                              label={option.toUpperCase()}
                            />
                          );
                        })}
                      </FormGroup>
                    </FormControl>
                  </h5>
                </Grid>
              </Grid>
            </MKBox>
          </MKBox></>}

      </MKBox>
    </div>
  );
}
export default Cards;
