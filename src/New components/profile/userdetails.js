// @mui material components
import Container from "@mui/material/Container";
import { Grid, TextField } from "@mui/material";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function UserDetails() {
  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="h4" color="text" mb={2}>
          User Details
        </MKTypography>
        <Grid>
          <TextField
            disabled
            id="filled-disabled"
            label="First Name"
            defaultValue="Gokul"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
          <TextField
            disabled
            id="filled-disabled"
            label="Last Name"
            defaultValue="selavaraj"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
        </Grid>
        <Grid>
          <TextField
            disabled
            id="filled-disabled"
            label="email"
            defaultValue="1212@gmail.com"
            variant="filled"
            type="email"
            sx={{ width: 400, mb: 1 }}
          />
          <TextField
            disabled
            id="filled-disabled"
            label="password"
            defaultValue="1212@gmail.com"
            type="password"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
        </Grid>
        <Grid>
          <TextField
            disabled
            id="filled-disabled"
            label="company / orgainization"
            defaultValue="Codebugged"
            type="text"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
          <TextField
            disabled
            id="filled-disabled"
            label="industry"
            defaultValue="coding"
            type="text"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
        </Grid>
        <Grid>
          <TextField
            disabled
            id="filled-disabled"
            label="country"
            defaultValue="India"
            type="text"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
          <TextField
            disabled
            id="filled-disabled"
            label="phone"
            defaultValue="1111111111"
            type="tel"
            variant="filled"
            sx={{ width: 400, mb: 1 }}
          />
        </Grid>
        <TextField
          disabled
          id="filled-disabled"
          label="aadhar"
          defaultValue="1111111111"
          type="text"
          variant="filled"
          sx={{ width: 400, mb: 1 }}
        />
      </Container>
    </MKBox>
  );
}
export default UserDetails;
