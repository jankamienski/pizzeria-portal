import React from 'react';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => (
  <div>
    <PageNav />
    {children}
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.any,
};
