import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 18px;
  line-height: 21px;
  margin: 25px 115px;

  button {
    margin: 4px;
    }
  }

  .custombtn {
    height: 42px;
    width: 181px;
    font-size: 20px;
    margin: 20px 0 20px 0;
  }

  table {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
  }

  table thead tr th {
    background-color: #fff;
    color: #0b8793;
    padding: 12px;
  }

  table thead tr th:first-child {
    border-top-left-radius: 5px;
  }

  table thead tr th:last-child {
    border-top-right-radius: 5px;
  }

  table tbody tr td {
    cursor: default;
    border-top: 1px solid #cccccc;
  }

  table tbody tr td:nth-child(-n + 2) {
    padding: 10px;
  }

`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  .modal-header {
    border: none;
    padding-bottom: 0;
  }

  form {
    input {
      background: #ffffff;
      border: 1px solid #c4c4c4;
      box-sizing: border-box;
      border-radius: 5px;
      font-size: 18px;
      line-height: 21px;
      height: 39px;
      padding: 10px;
      margin: 10px 0;
      width: 100%;
    }

    button {
      height: 42px;
      width: 125px;
      font-size: 20px;
      margin: 20px 0 20px 0;
    }

    .modal-footer {
      justify-content: space-between;
      margin: 0;
      padding: 0;
      border: none;
    }
  }
`;
