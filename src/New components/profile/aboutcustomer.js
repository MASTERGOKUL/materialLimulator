// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Avatar from "@mui/material/Avatar";

function UserDetails() {
  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="body2" color="text">
          Your company may not be in the software business, but eventually, a software company will
          be in your business.
        </MKTypography>
      </Container>
    </MKBox>
  );
}

function AboutCustomer() {
  const username = "username";
  return (
    <MKBox component="section" pt={6} my={8}>
      <MKTypography variant="h4" sx={{ ml: 100, mt: -10, mb: 4 }}>
        Welcome {username}
      </MKTypography>
      <Container>
        <Grid container position="relative" alignItems="center" mr={10} right={100}>
          <Grid display="flex" md={5}>
            <MKBox>
              <Avatar sx={{ width: 400, height: 400 }} variant="square">
                H
              </Avatar>
            </MKBox>
          </Grid>
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">User Details</MKTypography>
            <UserDetails />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutCustomer;
