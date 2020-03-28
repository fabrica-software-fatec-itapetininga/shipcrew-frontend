import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 21px;
  margin: 45px 115px 25px;
  color: #fff;
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .inputWithIcon{
    position: relative;
    left: 16px;
    top: 0;
  }

  input {
    width: 237px;
    height: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 15px 0 15px 28px;
    font-size: 20px;
    background: none;
    color: #fff;

    ::placeholder{
      color: rgba(255, 255, 255, 0.7);
   }
`;

export const CardContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 15px;

  .card {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #cccccc;
    border-radius: 5px;
    color: #000;
  }

  .card {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #cccccc;
    border-radius: 5px;
    color: #000;
    cursor: default;
    transform: translateX(5px);
    &:hover {
      transition: all 0.2s ease-out;
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      top: -4px;
      background-color: #d1c9d0;
    }

    &:hover:before {
      transform: scale(2.15);
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    font-size: 32px;
    line-height: 1.2em;
    padding: 16px 16px 8px 16px;
  }

  .card-header img {
    width: 80px;
    border-radius: 5px;
    margin-right: 16px;
  }

  .card-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 8px 16px 16px 16px;
  }

  .list-group {
    display: block;
  }
  .list-group-item {
    padding: 0px;
    font-size: 14px;
    line-height: 1.5em;
  }
  .list-group-item,
  .card-header {
    background: transparent;
    border: none;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 8px;
  }

  .custombtn {
    height: 42px;
    width: 181px;
    font-size: 20px;
    margin: 20px 0 20px 0;
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

    label {
      padding: 0px;
      margin: 10px 12px 10px 0;
      font-size: 18px;
      color: #0B8793;
    }

    .customcheck {
      -webkit-appearance: none;
      position: relative;
      top: 2px;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: #ffffff;
      border: 1px solid #c4c4c4;
      margin: 1px 12px 1px 0;
      padding: 0;
    }

    .customcheck:checked {
      background-color: #0B8793;
      border: none;
    }

  .customcheck:checked:after {
    display: block;
  }

  .customcheck:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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
`;

export const selectStyles = {
  control: (base, state) => ({
    ...base,
    height: 37,
    minHeight: 37,
    width: 221,
    minWidth: 221,
    boxShadow: state.isFocused ? 0 : 0,
    borderColor: '#00E8FF',
    '&:hover': {
      borderColor: '#00E8FF',
    },
  }),
  valueContainer: base => ({
    ...base,
    color: '#000',
    height: 37,
    minHeight: 37,
  }),
  indicatorSeparator: () => ({ display: 'none' }),

  menu: base => ({
    ...base,
    margin: 1,
    padding: 0,
  }),
  option: base => ({
    ...base,
    color: '#000',
    height: 37,
    minHeight: 37,
  }),
};
