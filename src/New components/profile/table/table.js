/*eslint-disable */
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "-10px -10px",
    width: "100%",
    height:"500px",
    overFlow:"hidden",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    width:"300%",
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
    { place: "delhi", sensor: "mls", terrain: "semiurban", file: "IO", Date: "13/08/2022",status:"Downloaded"},
    { place: "mumbai", sensor: "mls", terrain: "semiurban", file: "IO", Date: "14/08/2022" ,status:"Downloaded"},
    { place: "chennai", sensor: "mls", terrain: "semiurban", file: "IO", Date: "15/08/2022" ,status:"Pending"},
    { place: "coimbatore", sensor: "mls", terrain: "semiurban", file: "IO", Date: "3/08/2022" ,status:"Downloaded"},
    { place: "chandigar", sensor: "mls", terrain: "semiurban", file: "IO", Date: "17/08/2022",status:"Downloading" },
    { place: "delhi", sensor: "mls", terrain: "semiurban", file: "IO", Date: "11/08/2022" ,status:"Downloaded"},
    { place: "bangalore", sensor: "mls", terrain: "semiurban", file: "IO", Date: "13/08/2022",status:"Pending" },
    { place: "mangalore", sensor: "mls", terrain: "semiurban", file: "IO", Date: "17/08/2022" ,status:"Downloaded"},
    { place: "goa", sensor: "mls", terrain: "semiurban", file: "IO", Date: "13/08/2022" ,status:"Downloaded"},
    { place: "chatiskar", sensor: "mls", terrain: "semiurban", file: "IO", Date: "14/08/2022",status:"Downloading" },
    { place: "manali", sensor: "mls", terrain: "semiurban", file: "IO", Date: "16/08/2022",status:"Downloading" },
  ];
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>S.no</TableCell>
            <TableCell className={classes.tableHeaderCell}>Data Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>File</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => (
            <TableRow key={index}>
              <TableCell width="10px">{index}</TableCell>
              <TableCell>
                <Grid container>
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{row.place}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.sensor}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.terrain}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.file}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="subtitle2">
                  {row.Date}
                </Typography>
              </TableCell>
              <TableCell>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            count={rows.length}
            component="div"
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableFooter>
    </TableContainer>
  );
}

export default MTable;
