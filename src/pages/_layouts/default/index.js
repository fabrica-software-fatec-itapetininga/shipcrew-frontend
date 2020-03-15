import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';
import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />
      <Sidebar />
      {children}
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
