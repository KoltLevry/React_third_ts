import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
`;

export const Button = styled.button<{ red?: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.red ? 'red' : 'green')};
  color: white;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const CardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
