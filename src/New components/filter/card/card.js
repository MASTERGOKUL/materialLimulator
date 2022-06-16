import { Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import { Form } from "react-bootstrap";

function Cards() {
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
            d
          </MKTypography>
        </MKBox>
        <MKBox p={7}>
          <MKBox width="100%" component="form" method="post" autocomplete="off" mx={15}>
            <Grid container spacing={0}>
              <Grid item xs={0} md={-55} mx={-15}>
                <h4>
                  <Form>
                    <Form.Check aria-label="option 1" label="{props.lab1}" name="group1" />
                    <Form.Check aria-label="option 1" label="{props.lab2}" name="group1" />
                    <Form.Check aria-label="option 1" label="{props.lab3}" name="group1" />
                  </Form>
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
