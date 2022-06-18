import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import MKButton from "components/MKButton";
import axios from "axios";
import TimeAgo from "timeago-react";

/* eslint-disable */
function Main() {
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    filterData();
  }, []);

  const filterData = () => {
    axios
      .get(`http://143.110.249.208:3000/items/pcd_instance?fields=*,io_files.directus_files_id`)
      .then((res) => {
        const resp = res.data.data;
        console.log(resp);
        setResults(resp);
      });
  };
  return (
    <div item xs={0} sm={0} mt={0} lg={0} xl={3} ml={0}>
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        display="grid"
        position="fixed"
        mb={10}
        mx={5}
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
            <p>Filter Results</p>
          </MKTypography>
        </MKBox>
        <div p={60}>
          <div overflowY="scroll" display="block" height={300}>
            {results.map((detail, index) => (
              <MKBox
                key={index.toString()}
                variant="gradient"
                bgColor="grey"
                coloredShadow="info"
                borderRadius="lg"
                p={2}
                mx={10}
                mt={3}
                mb={3}
              >
                <h3>{detail.name}</h3>
                <p>
                  <strong>Place:</strong> {detail.place}
                </p>
                <p>
                  <strong>Sensor:</strong> {detail.sensor.toUpperCase()}{" "}
                  <strong>Environment:</strong> {detail.environment} <strong>Terrain:</strong>{" "}
                  {detail.terrain}
                </p>
                <p>
                  <strong>Uploaded:</strong> <TimeAgo datetime={detail.date_created} />
                </p>
                <br></br>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={() => {
                    window.open("http://127.0.0.1:5501/threepcs.html", "_blank");
                  }}
                >
                  Visualize
                </MKButton>
                <span>{" "}</span>
                <MKButton
                  variant="gradient"
                  color="info"
                  onClick={() => {
                    window.open("#", "_blank");
                  }}
                  >
                  Details
                </MKButton>
                  <span>{" "}</span>
                <MKButton
                  variant="gradient"
                  height="fit-content"
                  width="fit-content"
                  color="info"
                  onClick={() => {
                    window.open("#", "_blank");
                  }}
                >
                  Download
                </MKButton>
              </MKBox>
            ))}
          </div>
        </div>
      </MKBox>
    </div>
  );
}
export default Main;
