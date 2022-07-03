import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import * as React from "react";
import MKButton from "components/MKButton";
import axios from "axios";
import TimeAgo from "timeago-react";
import { Checkbox, FormControlLabel } from "@mui/material";

/* eslint-disable */
function Main({ checked, filterParams }) {
  const [results, setResults] = React.useState([]);
  const [checkList, setCheckList] = React.useState([]);
  const [filterString, setFilterString] = React.useState("");
  const handleChange = (e, index) => {
    e.preventDefault();
    const newCheckList = [...checkList];
    newCheckList[index] = !newCheckList[index];
    setCheckList(newCheckList);
  };
  const handlleFilterString = (filterParam) => {
    var filter = "?filter=";
    if (filterParam.env !== "all") {
      filter = filter + "&environment=" + filterParam.env;
    }
    if (filterParam.datatype !== "all") {
      filter = filter + "&data_type=" + filterParam.datatype;
    }
    if (filterParam.pointrecord !== "all") {
      filter = filter + "&point_record=" + filterParam.pointrecord;
    }
    if (filterParam.terrain !== "all") {
      filter = filter + "&terrain=" + filterParam.terrain;
    }
    if (filterParam.sensor !== "all") {
      filter = filter + "&sensor=" + filterParam.sensor;
    }
    if (filterParam.charge !== "all") {
      filter = filter + "&charge=" + filterParam.charge;
    }
    if (filterParam.dataDensity !== "all") {
      filter = filter + "&data_density=" + filterParam.dataDensity;
    }
    if (filterParam.accuracy !== "all") {
      filter = filter + "&accuracy=" + filterParam.accuracy;
    }
    console.log(filter);
    setFilterString(filter);
  };
  React.useEffect(() => {
    handlleFilterString(filterParams);
    filterData();
  }, [checked, filterParams]);

  const filterData = () => {
    axios
      .get(
        checked
          ? `http://143.110.249.208:3000/items/pcd_instance?fields=*,io_files.directus_files_id`
          : `http://143.110.249.208:3000/items/pcd_instance?fields=io_files.directus_files_id.*,io_files.pcd_instance_id.*`
      )
      .then((res) => {
        const resp = res.data.data;
        var newResults = [];
        if (checked) {
          newResults.push(...res.data.data);
          // alert(newResults.length + " Segmented files found");
        } else {
          res.data.data.forEach((item) => {
            newResults.push(...item.io_files);
          });
          // alert(newResults.length + " IO files found");
        }
        checkList.fill(false, 0, newResults.length);
        setResults(newResults);
      });
  };
  return (
    <div item xs={0} sm={0} mt={100} lg={0} xl={3} ml={0}>
      <MKBox
        bgColor="white"
        borderRadius="xl"
        shadow="lg"
        sx={{
          height: " 800px",
          width:"1180px",
          display: "block",
          position: "fixed",
          overflowX: "clip",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "30px",
            background: "#4D8CC9",
          },
        }}
        mb={10}
        mx={5}
      >
        {/*placeholder box 
        <MKBox
          variant="gradient"
          bgColor="white"
          coloredShadow="info"
          zIndex={1}
          borderRadius="lg"
          pb={5}
          pr={20}
          mx={0}
          position="fixed"
        ></MKBox>*/}

        {/*filter name box */}
      
          <MKBox
            variant="gradient"
            bgColor="info"
            coloredShadow="info"
            borderRadius="lg"
            p={2}
            mx={60}
            zIndex={2}
            position="fixed"
            mt={-3}
          >
            <MKTypography variant="h3" color="white">
              <p>Filter Results</p>
            </MKTypography>
            
        
        </MKBox>
        {/*main card elements box */}

        <div p={60}>
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
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      border: "2px solid #92aed4",
                      borderRadius: "0.35rem",
                      width: "1rem",
                      height: "1rem",
                    }}
                    checked={checkList[index]}
                    onChange={(e) => handleChange(e, index)}
                  />
                }
                label=""
                sx={{ position: "absolute", left: 1040 }}
              />
              <h3>
                {checked
                  ? detail.name
                  : detail.pcd_instance_id.name.split("_").join(" ") +
                    "\n" +
                    detail.directus_files_id.title.split(" ").pop()}
              </h3>
              <p>
                <strong>Place:</strong> {checked ? detail.place : detail.pcd_instance_id.place}
              </p>
              <p>
                <strong>Sensor:</strong>{" "}
                {checked
                  ? detail.sensor.toUpperCase()
                  : detail.pcd_instance_id.sensor.toUpperCase()}{" "}
                <strong>Environment:</strong>{" "}
                {checked ? detail.environment : detail.pcd_instance_id.environment}{" "}
                <strong>Terrain:</strong>{" "}
                {checked ? detail.terrain : detail.pcd_instance_id.terrain}
              </p>
              {checked ? (
                <p>
                  <strong>IO FIles:</strong>
                  {detail.io_files.length}
                </p>
              ) : (
                <></>
              )}
              <p>
                <strong>Uploaded:</strong>{" "}
                <TimeAgo
                  datetime={checked ? detail.date_created : detail.pcd_instance_id.date_created}
                />
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
              <span> </span>
              {/*<MKButton
                variant="gradient"
                color="info"
                onClick={() => {
                  window.open("#", "_blank");
                }}
              >
                Details
              </MKButton>*/}
              <span> </span>
              <MKButton
                variant="gradient"
                height="fit-content"
                width="fit-content"
                color="info"
                sx={{ position: "relative", left: 730 }}
                onClick={() => {
                  window.open("#", "_blank");
                }}
              >
                Download
              </MKButton>
            </MKBox>
          ))}
        </div>
      </MKBox>
    </div>
  );
}
export default Main;
