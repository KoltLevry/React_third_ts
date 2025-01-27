import styled from '@emotion/styled';

export const MainButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  min-height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background: ${({ disabled }) => (disabled ? '#d3d3d3' : '#1f27f5')};
  color: ${({ disabled }) => (disabled ? '#a9a9a9' : 'white')};

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#d3d3d3' : '#141bd9')};
  }
`;