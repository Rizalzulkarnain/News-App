import styled from 'styled-components';

import { theme } from '../root';

export const DivContainer = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin-top: 3%;
  display: grid;
  justify-content: center;
  position: relative;
`;

export const CustomInput = styled.div`
  position: relative;
  display: grid;
  justify-content: center;

  input {
    background: transparent;
    border: none;
    border-bottom: solid 1px #ccc;
    padding: 5px;
    transition: padding 0.4s;
  }

  input:placeholder-shown {
    color: #aaa;
    font-size: 14px;
    left: 5px;
    top: 5px;
  }

  input::placeholder {
    color: ${theme.colors.grey};
    text-align: justify;
  }

  input:focus,
  input:not(:placeholder-shown) {
    border-bottom: solid 1px #4476bd;
    outline: none;
    padding: 20px 5px 5px;
  }
`;

export const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  padding: 30px;
`;
