import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 25px;
  color: #26a8ff;
`;

export const Input = styled.textarea`
  border: 1px solid #c0c0c0;
  width: 50%;
  height: 140px;
  padding: 1%;
  resize: none;
  margin-bottom: 5px;
  min-width: 400px;

  &:focus {
    outline: 0;
  }
`;

export const Output = styled.div`
  border: 1px solid #c0c0c0;
  width: 50%;
  min-width: 400px;
  height: 140px;
  padding: 1%;
  resize: none;
  margin-bottom: 5px;
`

export const Button = styled.button`
  background-color: #26a8ff;
  width: 50%;
  min-width: 400px;
  height: 45px;
  transition: 400ms;
  color: #fff;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    background-color: #0a5af0;
  }
`;
