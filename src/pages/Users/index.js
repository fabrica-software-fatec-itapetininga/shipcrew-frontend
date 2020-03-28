import React, { useState, useEffect } from 'react';

import { Table, Button, Modal } from 'react-bootstrap';

import { MdEdit, MdDelete } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, ModalContent } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);

  const handleCloseNew = () => setShowNewUserModal(false);
  const handleShowNew = () => setShowNewUserModal(true);

  const handleCloseEdit = () => setShowEditUserModal(false);
  const handleShowEdit = () => setShowEditUserModal(true);

  async function loadUsers() {
    const response = await api.get('admin/users');
    setUsers(response.data.users);
  }

  async function handleSubmit(data) {
    const { password, confirmPassword } = data;
    try {
      if (password !== confirmPassword) {
        return toast.warning('As senhas estão diferentes');
      }

      await api.post('admin/users', data);

      handleCloseNew();
      loadUsers();
      return toast.success('Usúario criado com sucesso');
    } catch (err) {
      handleCloseNew();
      return toast.error('Falha ao criar usuário');
    }
  }

  async function openEditTab(id) {
    const response = await api.get(`admin/users/${id}`);
    const { name, email } = response.data;

    setName(name);
    setEmail(email);
    setUserId(id);
    handleShowEdit();
  }

  async function handleUpdate(data) {
    console.log(data);
    try {
      await api.patch(`admin/users/${userId}`, data);

      toast.success('Usúario editado com sucesso');
      handleCloseNew();
      loadUsers();
    } catch (err) {
      toast.error('Falha ao editar usuário');
    }
  }

  async function handleDelete(id) {
    try {
      await api.delete(`admin/users/${id}`);

      toast.success('Usúario excluido com sucesso');
      handleCloseNew();
      loadUsers();
    } catch (err) {
      toast.error('Falha ao criar usuário');
      handleCloseNew();
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

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
          {users.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => openEditTab(item.id)}
                  on
                >
                  <MdEdit />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(item.id)}
                >
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
            <Form onSubmit={handleSubmit}>
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="E-mail" />
              <Input type="password" name="password" placeholder="Senha" />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
              />
              <Modal.Footer>
                <Button variant="danger" onClick={handleCloseNew}>
                  Cancelar
                </Button>
                <Button type="submit" variant="info">
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
            <Form onSubmit={handleUpdate}>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                name="name"
                placeholder="Nome"
              />
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                placeholder="E-mail"
              />
              <Input type="password" name="password" placeholder="Senha" />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
              />
              <Modal.Footer>
                <Button variant="danger" onClick={handleCloseEdit}>
                  Cancelar
                </Button>
                <Button variant="info" type="submit">
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
