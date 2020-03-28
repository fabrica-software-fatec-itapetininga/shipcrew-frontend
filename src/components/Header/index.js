import React, { useState, useEffect } from 'react';
import {
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  Tab,
  Tabs,
} from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { signOut } from '../../store/modules/auth/actions';

import { Container, ModalContent } from './styles';
import Logo from '../../assets/logo.svg';

export default function Header() {
  const [user, setUser] = useState([]);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSignOut() {
    dispatch(signOut());
  }

  async function loadUser() {
    const response = await api.get(`admin/users/${profile.id}`);
    setUser(response.data);
  }

  async function changePassword(data) {
    const { oldPassword, confirmPassword, password } = data;
    const { name, email } = user;
    if (!(await bcrypt.compare(oldPassword, user.password))) {
      toast.warning('Senha incorreta');
    }
    await api.patch(`admin/users/${user.id}`, {
      name,
      email,
      oldPassword,
      password,
      confirmPassword,
    });
    toast.success('Senha alterada com sucesso');
    handleClose();
  }

  async function deleteUser(data) {
    const { password } = data;
    if (await bcrypt.compare(password, user.password)) {
      await api.delete(`admin/users/${user.id}`);
      toast.success('Perfil excluido com sucesso');
      dispatch(signOut());
    } else {
      toast.error('Erro ao excluir perfil');
    }
  }
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <img src={Logo} alt="Shipcrew" />
      <DropdownButton
        variant="light"
        alignRight
        title={profile.name}
        id="dropdown-menu-align-right"
      >
        <Dropdown.Item
          eventKey="1"
          variant="light"
          onClick={show ? handleClose : handleShow}
        >
          <FaCog style={{ marginRight: 10 }} />
          Configurações
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" variant="light" onClick={handleSignOut}>
          <FaSignOutAlt />
          Sair
        </Dropdown.Item>
      </DropdownButton>

      <Modal show={show} onHide={handleClose} centered>
        <ModalContent>
          <Modal.Header>
            <Modal.Title>
              <FaCog style={{ marginRight: 10 }} />
              Configurações
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              // eslint-disable-next-line react/jsx-no-duplicate-props
              defaultActiveKey="general"
            >
              <Tab eventKey="general" title="Geral">
                <Form>
                  <Input name="name" placeholder="Nome" value={user.name} />
                  <Input name="email" placeholder="E-mail" value={user.email} />
                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="info" onClick={handleClose}>
                    Salvar
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="change-password" title="Alterar senha">
                <Form onSubmit={changePassword}>
                  <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Senha atual"
                  />
                  <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                  />
                  <Input
                    name="confirmPassword"
                    placeholder="Confirmar nova senha"
                    type="password"
                  />
                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="info" type="submit">
                    Salvar
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="delete-account" title="Deletar cadastro">
                <p>
                  Tem certeza que deseja deletar o cadastro? Todos os dados
                  serão perdidos!
                </p>
                <Form onSubmit={deleteUser}>
                  <Input type="password" name="password" placeholder="Senha" />

                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" variant="info">
                    Salvar
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Modal.Body>
        </ModalContent>
      </Modal>
    </Container>
  );
}
