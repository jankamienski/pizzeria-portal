import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const demoContent = [
  {id: '10:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '10:30', Table1: 345, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '11:00', Table1: null, Table2: 123, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '11:30', Table1: null, Table2: 234, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '12:00', Table1: 387, Table2: 345, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '12:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '13:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '14:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '14:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '15:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '15:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '16:00', Table1: null, Table2: null, Table3: null, Table4: 678, Table5: null, Table6: null},
  {id: '16:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '17:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '17:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '18:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '18:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '19:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '19:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: 678, Table6: null},
  {id: '20:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '20:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '21:00', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
  {id: '21:30', Table1: null, Table2: null, Table3: null, Table4: null, Table5: null, Table6: null},
];

const Tables = props => {
  const classes = useStyles();
  return (
    <div className={styles.component}>
      <form className={classes.container} noValidate>
        <TextField
          id="datetime-local"
          label="Choose reserwation"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}           //jak zmienic kolor tekstu np w kalendarzu? Jak zmienic wielksoc tekstu? ODstepy? Jak zrobic aby w kazdym wierszu suwak dzialal odzielnie?
        />
      </form>

      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>Table 1</TableCell>
              <TableCell>Table 2</TableCell>
              <TableCell>Table 3</TableCell>
              <TableCell>Table 4</TableCell>
              <TableCell>Table 5</TableCell>
              <TableCell>Table 6</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                
                <TableCell>
                  {row.Table1}
                </TableCell>
                <TableCell>
                  {row.Table2 && (
                    <Button to={`${process.env.PUBLIC_URL}/waiter/Table2/${row.Table2}`}>
                      {row.Table2}
                    </Button>
                  )}
                </TableCell>
                <TableCell>
                  {row.Table3}
                </TableCell>
                <TableCell>
                  {row.Table4}
                </TableCell>
                <TableCell>
                  {row.Table5}
                </TableCell>
                <TableCell>
                  {row.Table6}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <h2>Table View</h2>
      <div>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
          New Booking
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/book/newBookingABC`}>
          Change Booking
        </Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/event/newEventABC`}>
          Change Event
        </Link>
      </div>
    </div>
  );
};

export default Tables;
