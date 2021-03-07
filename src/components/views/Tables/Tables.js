import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = props => (
  <div className={styles.component}>
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

export default Tables;
