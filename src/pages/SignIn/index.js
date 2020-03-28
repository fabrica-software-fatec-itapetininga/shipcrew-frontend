import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import Logo from '../../assets/logo.svg';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Modal } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    const { email, password } = data;

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Modal>
        <img src={Logo} alt="ShipCrew" />
        <Form onSubmit={handleSubmit}>
          <Input name="email" placeholder="E-mail" />

          <Input name="password" type="password" placeholder="Senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        </Form>
      </Modal>
    </Container>
  );
}
