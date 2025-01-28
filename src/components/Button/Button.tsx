import { ButtonProps } from "./types";
import { MainButton } from "./styles";

function Button({ name = "SEND", type, onClick, disabled = false, variant }: ButtonProps) {

  return (
    <MainButton 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      variant={variant}>
      {name}
      
    </MainButton>
  );
}
export default Button;