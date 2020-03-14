import React, { useState } from 'react';
import {
  Dropdown,
  DropdownButton,
  Modal,
  Button,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';

import { Container, ModalContent } from './styles';
import Logo from '../../assets/logo.svg';

export default function Header() {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState('1');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function toggle(tab) {
    if (activeItem !== tab) setActiveItem(tab);
  }

  return (
    <Container>
      <img src={Logo} alt="Shipcrew" />

      <DropdownButton
        variant="light"
        alignRight
        title="Mock"
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
        <Dropdown.Item eventKey="2" variant="light">
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
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab
                eventKey="general"
                title="Geral"
                role="tab"
                active={activeItem === '1'}
                onClick={() => toggle('1')}
              >
                <Form>
                  <Input name="name" placeholder="Nome" />
                  <Input name="email" placeholder="E-mail" />
                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="info" onClick={handleClose}>
                    Salvar
                  </Button>
                </Form>
              </Tab>
              <Tab
                eventKey="change-password"
                title="Alterar senha"
                role="tab"
                active={activeItem === '2'}
                onClick={() => toggle('2')}
              >
                <Form>
                  <Input name="password" placeholder="Senha atual" />
                  <Input name="new-password" placeholder="Nova senha" />
                  <Input
                    name="confirm-password"
                    placeholder="Confirmar nova senha"
                  />
                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="info" onClick={handleClose}>
                    Salvar
                  </Button>
                </Form>
              </Tab>
              <Tab
                eventKey="delete-account"
                title="Deletar cadastro"
                active={activeItem === '3'}
                onClick={() => toggle('3')}
                role="tab"
              >
                <p>
                  Tem certeza que deseja deletar o cadastro? Todos os dados
                  serão perdidos!
                </p>
                <Form>
                  <Input name="password" placeholder="Senha" />

                  <Button variant="danger" onClick={handleClose}>
                    Cancelar
                  </Button>
                  <Button variant="info" onClick={handleClose}>
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
