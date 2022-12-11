import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableRowStyles, tableStyles } from "./Accounts.styles";
import { Config } from "../../config";

// Transaction Interface
interface ITransaction {
  Id: number;
  Balance: number;
  Batch: string;
  Credit: number;
  Debit: number;
  Date: string;
  Description: string;
  TransactedBy: string;
  ReferenceId: string;
}

export const Accounts = () => {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(Config.AccountsAPI + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data as ITransaction[]);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">By</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="right">ReferenceId</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.ReferenceId} sx={tableRowStyles}>
              <TableCell align="left">{new Date(row.Date).toLocaleDateString()}</TableCell>
              <TableCell align="right">{row.Credit - row.Debit} ₹</TableCell>
              <TableCell align="right">{row.TransactedBy}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.ReferenceId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
