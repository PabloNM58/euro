import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ winners }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Data sorteo</b>
            </TableCell>
            <TableCell align="right">
              <b>Combinación gañadora</b>
            </TableCell>
            <TableCell align="right">
              <b>Estrelas</b>
            </TableCell>
            <TableCell align="right">
              <b>Acertos (num/est)</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {winners.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: index % 2 === 0 ? "#eeeeee" : "fff",
              }}
            >
              <TableCell component="th" scope="row">
                {row.sorteo.FECHA}
              </TableCell>
              <TableCell align="right">
                {row.sorteo.COMBGANADORA.map((item, index) => {
                  return (
                    <span key={index}>
                      {item} {index !== 4 && "- "}
                    </span>
                  );
                })}
              </TableCell>
              <TableCell align="right">
                {row.sorteo.ESTRELLAS.map((item, index) => {
                  return (
                    <span key={index}>
                      {item} {index !== 1 && "- "}
                    </span>
                  );
                })}
              </TableCell>
              <TableCell align="right">
                {row.aciertos} / {row.estrellas}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
