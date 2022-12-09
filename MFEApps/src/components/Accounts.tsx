import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

// Custom style definitions
const useStyles = makeStyles(() => ({
  tableHeader: {
    fontWeight: 600,
  }
}));

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
}

const apiEndpoint = "https://jnvsitamarhi.org/JsonData/accounts.json";

export const Accounts = () => {
  const classes = useStyles();
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 9000 + 1000);
    fetch(apiEndpoint + "?random=" + random)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTransactions(data as ITransaction[]);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow className={classes.tableHeader}>
            <TableCell>Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">By</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Purpose</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.Balance} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="left">{new Date(row.Date).toLocaleDateString()}</TableCell>
              <TableCell align="right">{row.Credit - row.Debit} ₹</TableCell>
              <TableCell align="right">{row.TransactedBy}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
