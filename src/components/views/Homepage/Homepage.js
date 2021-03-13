import React from 'react';
import styles from './Homepage.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, amount) {
  return { name, amount };
}

const rows = [
  createData('Local', 23),
  createData('Delivery', 70),
  createData('Canceled', 2),
];

const demoContent = [
  {id: '001', status: 'ordered', type: 'reservation', order: 111},
  {id: '002', status: 'paid', type: 'reservation',order: 222},
  {id: '003', status: 'ordered', type: 'event',order: 123},
  {id: '004', status: 'ordered', type: 'reservation',order: 234},
  {id: '005', status: 'ordered', type: 'event',order: 345},
  {id: '006', status: 'paid', type: 'reservation',order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>not confirmed</Button>
      );
    case 'paid':
      return (
        <Button>confirmed</Button>
      );
    default:
      return null;
  }
};




const Homepage = () => {
  const classes = useStyles();
  console.log(rows);
  return (
    <div className={styles.component}>
      <h2>Order statistics</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order Type</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>List of reservation for local events</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lp</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Confirmation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.order}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Homepage;