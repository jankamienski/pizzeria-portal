import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const demoContent = [
  {id: '1', status: 'ordered', order: 423, ordered: 'salat'},
  {id: '2', status: 'ordered', order: 343, ordered: 'pizza, salat'},
  {id: '3', status: 'ordered', order: 123, ordered: 'pizza'},
  {id: '4', status: 'prepared', order: 234, ordered: 'pizza, salat'},
  {id: '5', status: 'delivered', order: 345, ordered: 'pizza, salat'},
  {id: '6', status: 'delivered', order: 456, ordered: 'pizza, salat'},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    default:
      return null;
  }
};


const Kitchen = () => {
 

  return (
    <div className={styles.component}>
      <h2>Kitchen View</h2>
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Order</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Preparation status</TableCell>
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
                  {row.order && (
                    <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                      {row.order}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.ordered}
                </TableCell>
                <TableCell>
                  {renderActions(row.status)}
                </TableCell>
                <TableCell>
                  <Switch  
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Kitchen;
