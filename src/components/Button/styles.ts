import styled from '@emotion/styled';

interface ButtonStyledProps {
  disabled: boolean;
  variant: "primaryFirst" | "secondarySecond";
  isToggled: boolean;
}

export const MainButton = styled.button<ButtonStyledProps>`
  width: 100px;
  min-height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  border-radius: 4px;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? '#a9a9a9' : 'white')};
  background: ${({ disabled, variant }) => 
    disabled 
      ? '#d3d3d3' 
      : variant === "secondarySecond"
      ? "white"
      : "#1f27f5"};

color: ${({ variant, disabled }) => 
    disabled
      ? "#a9a9a9"
      : variant === "secondarySecond"
      ? "blue"
      : "white"};

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ variant, disabled }) => 
      disabled
        ? "#d3d3d3"
        : variant === "secondarySecond"
        ? "#f0f8ff"
        : "#141bd9"};
  }
`;