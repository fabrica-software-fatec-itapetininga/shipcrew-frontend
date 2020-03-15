import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import { Nav } from 'react-bootstrap';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <Nav className="flex-column" as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/dashboard">
            <Nav.Link as="a">Dashboard</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="#">
            <Nav.Link as="a">Estudantes</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/users">
            <Nav.Link as="a">Usuários</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
