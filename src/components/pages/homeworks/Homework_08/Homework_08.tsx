import Button from "../../../Button/Button";
import { Hm8Container, ButtonWrapper, TextTitle } from './styles';

function Homework_08() {
  return (
     <Hm8Container>
    <TextTitle>Homework_08 TS!</TextTitle>
    <ButtonWrapper>
      <Button name="Enabled / Active Button" disabled={false}/>
      <Button name="Disabled Button" disabled />
      {/* disabled === disabled={true} */}
    </ButtonWrapper>
    </Hm8Container>
    )
}

export default Homework_08;
