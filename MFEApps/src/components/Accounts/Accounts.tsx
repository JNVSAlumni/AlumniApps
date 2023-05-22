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
  Serial: number;
  Date: string;
  Balance: number;
  Credit: number;
  Debit: number;  
  Description: string;
  TransactedBy: string;
}

export const Accounts = () => {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(Config.AccountsAPI + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a: ITransaction, b: ITransaction) => {
          return b.Serial - a.Serial;
        });
        setTransactions(sortedData as ITransaction[]);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={tableStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">CR/DR</TableCell>
            <TableCell align="left">Balance</TableCell>
            <TableCell align="left">Transaction Info</TableCell>
            <TableCell align="left">Purpose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.Serial} sx={tableRowStyles}>
              <TableCell align="left">{new Date(row.Date).toLocaleDateString()}</TableCell>
              <TableCell align="left">{row.Credit - row.Debit} ₹</TableCell>
              <TableCell align="left">{row.Balance} ₹</TableCell>
              <TableCell align="left">{row.TransactedBy}</TableCell>
              <TableCell align="left">{row.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
