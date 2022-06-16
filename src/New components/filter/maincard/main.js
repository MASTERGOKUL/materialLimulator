import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";

function Main() {
  return (
    <div item xs={0} sm={0} mt={0} lg={0} xl={3} ml={0}>
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="grid"
        position="fixed"
        mt={-85}
        mb={100}
        mx={5}
        height={780}
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          borderRadius="lg"
          p={2}
          mx={30}
          mt={-3}
        >
          <MKTypography variant="h3" color="white">
            <p>Details</p>
          </MKTypography>
        </MKBox>
        <MKBox p={60} mb={0}>
          <MKBox component="form" method="post" autocomplete="off">
            <div mt={0}>
              <div>
                <p>more deatails</p>
              </div>
            </div>
          </MKBox>
        </MKBox>
      </MKBox>
    </div>
  );
}
export default Main;
