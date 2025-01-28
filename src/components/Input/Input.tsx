import { InputProps } from './types'
import { InputContainer, InputElement, StyledLabel } from './styles'

function Input({ name, type = 'text', placeholder, label, id, value, onChange }: InputProps) {
  return (
    <InputContainer>
      {/* // 7 before */}
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>} 
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;