/*eslint-disable */
// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DownloadInfo() {
  const columns = [
    "Place",
    "Sensor",
    "Environment",
    "Terrain",
    "segement/IO File",
    "Download Time",
  ];

  const rows = [
    ["India", "mls", "clear", "semiurban", "IO", 3287263],
    ["China", "mls", "clear", "semiurban", "IO", 596961],
    ["Italy", "mls", "cloudy", "semiurban", "IO", 301340],
    ["United States", "mls", "cloudy", "semiurban", "IO", 9833520],
    ["Canada", "mls", "rainy", "semiurban", "IO", 9984670],
    ["Australia", "mls", "clear", "semiurban", "IO", 7692024],
    ["Germany", "mls", "clear", "semiurban", "IO", 357578],
    ["Ireland", "IE", "clear", "semiurban", "IO", 70273],
    ["Mexico", "MX", "clear", "semiurban", "IO", 1972550],
    ["Japan", "JP", "clear", "semiurban", "IO", 377973],
    ["France", "FR", "clear", "semiurban", "IO", 640679],
    ["United Kingdom", "GB", "clear", "semiurban", "IO", 242495],
    ["Russia", "RU", "clear", "semiurban", "IO", 17098246],
    ["Nigeria", "NG", "clear", "semiurban", "IO", 923768],
    ["Brazil", "BR", "clear", "semiurban", "IO", 8515767],
  ];

  return (
    <MKBox>
      <Container maxWidth="sm">
        <MKTypography variant="h4" color="text" pb={2}>
          Download Details
        </MKTypography>
      </Container>
    </MKBox>
  );
}
export default DownloadInfo;
