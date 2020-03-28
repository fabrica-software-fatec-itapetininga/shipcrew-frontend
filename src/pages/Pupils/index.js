import React, { useState } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { Form, Input } from '@rocketseat/unform';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import Select from 'react-select';
import { MdSearch, MdDelete, MdEdit } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import {
  Container,
  FormContent,
  CardContent,
  ButtonContent,
  ModalContent,
  selectStyles,
} from './styles';
import 'react-day-picker/lib/style.css';

export default function Pupils() {
  const filter = [
    { value: 'all', label: 'Todos' },
    { value: 'active', label: 'Ativos' },
    { value: 'inactives', label: 'Inativos' },
  ];

  const parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  const formatDate = (date, format, locale) => {
    const formated = dateFnsFormat(date, format, { locale });
    return formated;
  };

  const [selectedDay, setSelectedDay] = useState(undefined);

  const [selectedOption, setSelectedOption] = useState(filter[0]);

  const [checked, setChecked] = useState(true);

  const [show, setShow] = useState({
    new: false,
    edit: false,
  });

  const handleShow = modal => {
    if (modal === 'new') {
      setShow({ new: true, edit: false });
    } else if (modal === 'edit') {
      setShow({ new: false, edit: true });
    }
  };

  const handleClose = () => setShow({ new: false, edit: false });

  const handleChange = e => setSelectedOption(e);

  const handleDayClick = date => {
    if (date !== undefined) {
      const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
      setSelectedDay(date.toLocaleDateString('pt-BR', dateOptions));
    } else {
      setSelectedDay(undefined);
    }
  };

  const handleCheck = () => setChecked(!checked);

  const [pupils] = useState([
    {
      id: 1,
      name: 'Fulano de tal',
      presences: 14,
      absences: 0,
      integration_date: '01/01/2020',
      is_active: false,
      avatar: 'https://api.adorable.io/avatars/80/Fulano-de-tal.png',
    },
    {
      id: 2,
      name: 'Ciclano de tal',
      presences: 14,
      absences: 0,
      integration_date: '01/01/2020',
      is_active: true,
      avatar: 'https://api.adorable.io/avatars/80/Ciclano-de-tal.png',
    },
    {
      id: 3,
      name: 'Fulano de tal',
      presences: 14,
      absences: 0,
      integration_date: '01/01/2020',
      is_active: true,
      avatar: 'https://api.adorable.io/avatars/80/Fulano.png',
    },
    {
      id: 4,
      name: 'Ciclano de Tal',
      presences: 14,
      absences: 0,
      integration_date: '01/01/2020',
      is_active: true,
      avatar: 'https://api.adorable.io/avatars/80/Ciclano.png',
    },
  ]);

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const weekdaysLong = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekdaysShort = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <Container>
      <FormContent>
        <Form>
          <MdSearch className="inputWithIcon" />
          <Input name="seach" placeholder="Buscar" />
        </Form>
        <Select
          value={selectedOption}
          options={filter}
          styles={selectStyles}
          isSearchable={false}
          onChange={handleChange}
        />
      </FormContent>
      <ButtonContent>
        <Button
          variant="info"
          className="custombtn"
          onClick={show.new ? handleClose : () => handleShow('new')}
        >
          Novo
        </Button>
      </ButtonContent>
      <CardContent>
        {pupils.map(pupil => (
          <Card key={pupil.id}>
            <Card.Header>
              <img src={pupil.avatar} alt="avatar" />
              {pupil.name}
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  Presenças:
                  {` ${pupil.presences}`}
                </ListGroup.Item>
                <ListGroup.Item>
                  Faltas:
                  {` ${pupil.absences}`}
                </ListGroup.Item>
                <ListGroup.Item>
                  Integração:
                  {` ${pupil.integration_date}`}
                </ListGroup.Item>
                <ListGroup.Item>
                  {pupil.is_active ? (
                    <span style={{ color: '#008836' }}>Ativo</span>
                  ) : (
                    <span style={{ color: '#ff0000' }}>Inativo</span>
                  )}
                </ListGroup.Item>
              </ListGroup>
              <ButtonContent>
                <Button
                  variant="info"
                  size="sm"
                  onClick={show.edit ? handleClose : () => handleShow('edit')}
                >
                  <MdEdit />
                </Button>
                <Button variant="danger" size="sm">
                  <MdDelete />
                </Button>
              </ButtonContent>
            </Card.Body>
          </Card>
        ))}
      </CardContent>
      <Modal show={show.new} onHide={handleClose} centered size="sm">
        <ModalContent>
          <Modal.Header>
            <Modal.Title>
              <IoMdPersonAdd style={{ marginRight: 10 }} />
              Novo estudante
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Input name="name" placeholder="Nome" />
              <DayPickerInput
                dayPickerProps={{
                  months,
                  weekdaysLong,
                  weekdaysShort,
                  firstDayOfWeek: 0,
                }}
                formatDate={formatDate}
                format="dd/MM/yyyy"
                parseDate={parseDate}
                placeholder="Data de Integração"
                onDayChange={handleDayClick}
              />
              <label htmlFor="check">
                <input
                  id="check"
                  type="checkbox"
                  className="customcheck"
                  onChange={handleCheck}
                  defaultChecked={checked}
                />
                Ativo
              </label>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="info" onClick={handleClose}>
                  Salvar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </ModalContent>
      </Modal>

      <Modal show={show.edit} onHide={handleClose} centered size="sm">
        <ModalContent>
          <Modal.Header>
            <Modal.Title>
              <MdEdit style={{ marginRight: 10 }} />
              Editar estudante
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Input name="name" placeholder="Nome" />
              <DayPickerInput
                dayPickerProps={{
                  months,
                  weekdaysLong,
                  weekdaysShort,
                  firstDayOfWeek: 0,
                }}
                formatDate={formatDate}
                format="dd/MM/yyyy"
                parseDate={parseDate}
                placeholder="Data de Integração"
                onDayChange={handleDayClick}
              />
              <label htmlFor="is_active">
                <input
                  id="is_active"
                  type="checkbox"
                  className="customcheck"
                  onChange={handleCheck}
                  defaultChecked={checked}
                />
                Ativo
              </label>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="info" onClick={handleClose}>
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
