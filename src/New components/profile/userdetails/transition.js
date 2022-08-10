// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MTable from "../table/table";

function Transition() {
  return (
    <MKBox>
      <Container>
        <MKTypography variant="h4" color="text" pb={2}>
          Transaction Details
        </MKTypography>
        <MTable />
      </Container>
    </MKBox>
  );
}
export default Transition;
