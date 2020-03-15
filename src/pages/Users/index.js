import React, { useState } from 'react';

import { Table, Button, Modal } from 'react-bootstrap';

import { MdEdit, MdDelete } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import { Form, Input } from '@rocketseat/unform';

import { Container, ModalContent } from './styles';

export default function Users() {
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  const handleCloseNew = () => setShowNewUserModal(false);
  const handleShowNew = () => setShowNewUserModal(true);

  const handleCloseEdit = () => setShowEditUserModal(false);
  const handleShowEdit = () => setShowEditUserModal(true);

  const [userlist, setUserlist] = useState([
    {
      id: 1,
      name: 'Fulano de tal',
      email: 'fulano@mail.com',
    },
    {
      id: 2,
      name: 'Ciclano de tal',
      email: 'ciclano@mail.com',
    },
    {
      id: 3,
      name: 'Mock',
      email: 'mock@mail.com',
    },
  ]);

  return (
    <Container>
      <Button
        variant="info"
        className="custombtn"
        onClick={showNewUserModal ? handleCloseNew : handleShowNew}
      >
        Novo
      </Button>
      <Table hover borderless="true" size="sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {userlist.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={showEditUserModal ? handleCloseEdit : handleShowEdit}
                >
                  <MdEdit />
                </Button>
                <Button variant="danger" size="sm">
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showNewUserModal} onHide={handleCloseNew} centered size="sm">
        <ModalContent>
          <Modal.Header>
            <Modal.Title>
              <IoMdPersonAdd style={{ marginRight: 10 }} />
              Novo usuário
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="E-mail" />
              <Input name="password" placeholder="Senha" />
              <Input name="confirm_password" placeholder="Confirmar senha" />
              <Modal.Footer>
                <Button variant="danger" onClick={handleCloseNew}>
                  Cancelar
                </Button>
                <Button variant="info" onClick={handleCloseNew}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </ModalContent>
      </Modal>

      <Modal
        show={showEditUserModal}
        onHide={handleCloseEdit}
        centered
        size="sm"
      >
        <ModalContent>
          <Modal.Header>
            <Modal.Title>
              <MdEdit style={{ marginRight: 10 }} />
              Editar usuário
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="E-mail" />
              <Input name="password" placeholder="Senha" />
              <Input name="confirm_password" placeholder="Confirmar senha" />
              <Modal.Footer>
                <Button variant="danger" onClick={handleCloseEdit}>
                  Cancelar
                </Button>
                <Button variant="info" onClick={handleCloseEdit}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </ModalContent>
      </Modal>
    </Container>
  );
}
