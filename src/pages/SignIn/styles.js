import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Modal = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 580px;
  height: 406px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    height: 60%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    input {
      height: 30px;
      padding: 15px;
      background: none;
      font-size: 20px;
      border: none;
      border-bottom: 1px solid #360033;
      margin: 10px 0;

      ::placeholder {
        color: #000;
      }
    }

    button {
      background: #0b8793;
      border-radius: 5px;
      height: 52px;
      color: white;
      font-size: 20px;
    }
  }
`;
