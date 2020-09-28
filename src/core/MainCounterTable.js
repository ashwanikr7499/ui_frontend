import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(a1, a2, a3, a4, a5, a6) {
  return { a1, a2, a3, a4, a5, a6 };
}

const rows = [
  createData(1, 1, "MED-10289", 2, "Novartis", "Add"),
  createData(2, 1, "MED-10282", 3, "Johnson & Johnson", "Add"),
  createData(3, 2, "MED-10432", 4, "Cipla Add", "Add"),
  createData(4, 3, "MED-25322", 6, "Sun Pharma", "Add"),
  createData(5, 4, "MED-10222", 0, "Dr Reddy", "Add"),
];

export default function MainCounterTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">M_ID</TableCell>
            <TableCell align="right">Batch Number</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Created by</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.a1}>
              <TableCell component="th" scope="row">
                {row.a1}
              </TableCell>
              <TableCell align="right">{row.a2}</TableCell>
              <TableCell align="right">{row.a3}</TableCell>
              <TableCell align="right">{row.a4}</TableCell>
              <TableCell align="right">{row.a5}</TableCell>
              <TableCell align="right">
                <a href="#" class="btn btn-icon icon-left btn-warning">
                  <i class="fas fa-exclamation-triangle"></i>
                  Add to Stock counter
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
