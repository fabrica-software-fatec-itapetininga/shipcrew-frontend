import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  background: #fff;
  position: sticky;
  top: 0;
  display: flex;
  height: 108px;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;

  > img {
    height: 58px;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    line-height: 26px;
    color: #000;

    &:hover {
      color: #000;
      background: #ccc;
    }
  }

  .btn-primary:not(:disabled):not(.disabled).active {
    background: #ddd;
    color: #000;
  }

  .dropdown-menu {
    background: #fff;
    color: #000;

    svg {
      width: 18px;
      height: 18px;
      margin: 0 10px;
    }

    a {
      color: #000;
      font-size: 18px;
      padding: 10px 10px;
      display: flex;

      align-items: center;

      &:active {
        background: #ccc;
      }
    }
  }
`;

export const ModalContent = styled.div`
  .modal-header {
    flex-direction: column;
    padding-bottom: 0;
    border: 0;
  }
  .nav-tabs {
    display: grid;
    border-bottom: 1px solid #dee2e6;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;

    a {
      border: 1px solid #ccc;
    }
  }

  p {
    font-size: 16px;
    line-height: 23px;
    margin-top: 20px;
  }

  form {
    margin: 20px 0;
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
      width: 181px;
      font-size: 20px;
      margin: 20px 10px 0 0;
    }
  }

  .modal-footer {
    justify-content: flex-start;
  }
`;
