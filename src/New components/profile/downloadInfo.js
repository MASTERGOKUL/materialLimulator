// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DownloadInfo() {
  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="body2" color="text">
          download info Your company may not be in the software business, but eventually, a software
          company will be in your business.
        </MKTypography>
      </Container>
    </MKBox>
  );
}
export default DownloadInfo;
