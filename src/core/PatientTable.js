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
  createData("17JE003001", "NAME 1", 20, "B Tech CSE", "Student", "More Inf."),
  createData("EMP3002", "NAME 2", 21, "Petro", "Father", "More Inf."),
  createData("EMP3003", "NAME 3", 23, "MnC", "Son", "More Inf."),
  createData("17JE003004", "NAME 4", 18, " BTech ECE", "Student", "More Inf."),
  createData("17JE003005", "NAME 5", 19, "MTech MnC", "Student", "More Inf."),
];

export default function PatientTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age </TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Relation</TableCell>
            <TableCell align="right">More Details</TableCell>
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
                <a href="#" class="btn btn-icon btn-info">
                  <i class="fas fa-info-circle"></i>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
