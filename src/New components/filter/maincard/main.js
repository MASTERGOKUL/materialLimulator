import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import React from "react";
import details from "./maincarddetails";

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
        mb={10}
        mx={5}
        height={580}
      >
        <MKBox
          variant="gradient"
          bgColor="info"
          coloredShadow="info"
          borderRadius="lg"
          p={2}
          mx={50}
          mt={-3}
        >
          <MKTypography variant="h3" color="white">
            <p>Details</p>
          </MKTypography>
        </MKBox>
        <div p={60} >
            <div overflowY="scroll" display="block" height={300}>
              {details.map((details,index) => (
                 <MKBox 
                 key={index}    
                 variant="gradient"
                 bgColor="grey"
                 coloredShadow="info"
                 borderRadius="lg"
                 p={2}
                 mx={10}
                 mt={3}
                 mb={3}>
                  <h2>{details.head}</h2>
                  <button>{details.btnName}</button>
                  <p>{details.description}</p>
              </MKBox>
             ))

             }
            </div>
          </div>
      </MKBox>
    </div>
  );
}
export default Main;
