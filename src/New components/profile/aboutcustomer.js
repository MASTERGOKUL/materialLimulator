import React from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabPanel from "@mui/lab/TabPanel";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Avatar from "@mui/material/Avatar";
import UserDetails from "./userdetails";
import DownloadInfo from "./downloadInfo";
import Transition from "./transition";

function AboutCustomer() {
  /* user name */
  const username = "UserName";
  /* value for tabs */
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: String) => {
    setValue(newValue);
  };

  return (
    <MKBox component="section" pt={5} my={8}>
      <MKTypography variant="h4" color="text" sx={{ ml: 100, mt: -10, mb: 4 }}>
        Welcome {username}
      </MKTypography>
      <Container>
        <Grid container position="relative" alignItems="center" mr={10} right={50}>
          <Grid display="flex" md={5} height="auto">
            {/* user image */}
            <MKBox>
              <Avatar sx={{ width: 400, height: 400 }} variant="square">
                Image
              </Avatar>
              {/* tabs */}
              <TabContext value={value} orientation="vertical">
                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    position: "relative",
                    height: 324,
                    width: 400,
                  }}
                >
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderColor: "divider", height: "100%" }}
                  >
                    <Tab label="User Details" />
                    <Tab label="Transition Details" />
                    <Tab label="Download Details" />
                  </Tabs>
                  <Grid sx={{ position: "relative", left: 500, bottom: 750 }}>
                    {/* user details tab */}
                    <TabPanel value={0}>
                      {" "}
                      <UserDetails />
                    </TabPanel>
                    <TabPanel value={1}>
                      {/* download details tab */}
                      <DownloadInfo />
                    </TabPanel>
                    <TabPanel value={2}>
                      {/* tansition details tab */}
                      <Transition />
                    </TabPanel>
                  </Grid>
                </Box>
              </TabContext>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutCustomer;
