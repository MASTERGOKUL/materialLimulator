// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Transition() {
  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="body2" color="text">
          transition details Your company may not be in the software business, but eventually, a
          software company will be in your business.
        </MKTypography>
      </Container>
    </MKBox>
  );
}
export default Transition;
