/*eslint-disable */
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  TableContainer,
  Paper,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
    width: "350%",
    height: "500px",
    overFlow: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      background: theme.palette.secondary.dark,
    },
  },
  tableHeaderCell: {
    top:0,
    position:"sticky",
    height:"50px",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.getContrastText(theme.palette.secondary.dark),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function MTable() {
  const rows = [
    {
      place: "delhi",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "13/08/2022",
      status: "Downloaded",
    },
    {
      place: "mumbai",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "14/08/2022",
      status: "Downloaded",
    },
    {
      place: "chennai",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "15/08/2022",
      status: "Pending",
    },
    {
      place: "coimbatore",
      sensor: "mls",
      terrain: "semiurban",
      file: "Segmented",
      Date: "3/08/2022",
      status: "Downloaded",
    },
    {
      place: "chandigar",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "17/08/2022",
      status: "Downloading",
    },
    {
      place: "delhi",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "11/08/2022",
      status: "Downloaded",
    },
    {
      place: "bangalore",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "13/08/2022",
      status: "Pending",
    },
    {
      place: "mangalore",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "17/08/2022",
      status: "Downloaded",
    },
    {
      place: "goa",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "13/08/2022",
      status: "Downloaded",
    },
    {
      place: "chatiskar",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "14/08/2022",
      status: "Downloading",
    },
    {
      place: "manali",
      sensor: "mls",
      terrain: "semiurban",
      file: "IO",
      Date: "16/08/2022",
      status: "Downloading",
    },
  ];
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Grid>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <table className={classes.table}>
        <tr>
          <th className={classes.tableHeaderCell} style={{width:"10%"}}>S.no</th>
          <th className={classes.tableHeaderCell} style={{width:"30%"}}>Data Info</th>
          <th className={classes.tableHeaderCell} style={{width:"25%"}}>File</th>
          <th className={classes.tableHeaderCell} style={{width:"25%"}}>Date</th>
          <th className={classes.tableHeaderCell} style={{width:"100%"}}>Status</th>
        </tr>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <tr key={index}>
              <td style={{paddingLeft:50}}>{index+1}</td>
              <td style={{paddingLeft:50,paddingTop:12}}>
                <Grid container>
                  <Grid item>
                    <Typography className={classes.name}>Place : {row.place}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      Sensor : {row.sensor}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Terrain : {row.terrain}
                    </Typography>
                  </Grid>
                </Grid>
              </td>
              <td style={{paddingLeft:100}}>
                <Typography color="textSecondary" variant="h6">
                  {row.file}
                </Typography>
              </td>
              <td style={{paddingLeft:80}}>
                <Typography color="primary" variant="subtitle2">
                  {row.Date}
                </Typography>
              </td>
              <td style={{paddingLeft:50,paddingRight:50}}>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === "Downloaded" && "green") ||
                      (row.status === "Pending" && "blue") ||
                      (row.status === "Downloading" && "orange"),
                  }}
                >
                  {row.status}
                </Typography>
              </td>
            </tr>
          ))}
      </table>
    </TableContainer>
      <TableFooter>
      <TablePagination
        style={{width:"150%"}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableFooter>
    </Grid>
  );
}

export default MTable;
