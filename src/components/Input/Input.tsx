import "./styles.css";
import { InputProps } from './types'
import { InputContainer, InputElement, StyledLabel } from './styles'

function Input({ name, type = 'text', placeholder, label, id }: InputProps) {
  return (
    <InputContainer>
      {/* // 7 before */}
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>} 
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

export default Input;