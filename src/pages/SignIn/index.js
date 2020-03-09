import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import Logo from '../../assets/logo.svg';

import { Container, Modal } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Modal>
        <img src={Logo} alt="ShipCrew" />
        <Form>
          <Input name="email" placeholder="E-mail" />

          <Input name="password" placeholder="Senha" />

          <button type="submit">Login</button>
        </Form>
      </Modal>
    </Container>
  );
}
