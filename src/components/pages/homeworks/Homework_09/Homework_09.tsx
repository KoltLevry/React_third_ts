import { ChangeEvent, useState } from "react";
import Input from "../../../Input/Input.tsx";
import Button from "../../../Button/Button.tsx";
import { HwWrapper, HwTitle, InputsContainer, ResultBlock, ResultBlockDiv } from "./styles.ts";

function Homework_09() {

  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const [displayValue1, setDisplayValue1] = useState<string>("");
  const [displayValue2, setDisplayValue2] = useState<string>("");

  const onChangeValue1 =  (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value)
  }
  const onChangeValue2 =  (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value)
  }

  const onClickButton = () => {
    setDisplayValue1(inputValue1);
    setDisplayValue2(inputValue2);
  }

  // useEffect( () => {
  //   console.log("Done")
  // }, [inputValue])

  return (
      <>
      <HwWrapper>
        <HwTitle>Hi hm 9</HwTitle>
        <InputsContainer>
          <Input 
              name="input"
              type="text"
              placeholder="Write smth here"
              value={inputValue1}
              onChange={onChangeValue1}
          />
          <Input 
              name="input"
              type="text"
              placeholder="Write smth here"
              value={inputValue2}
              onChange={onChangeValue2}
          />
        </InputsContainer>
        <Button 
            name="Click me!"
            onClick={onClickButton}
        />
        <ResultBlock>
          <ResultBlockDiv>Value from input 1: {displayValue1}</ResultBlockDiv>
          <ResultBlockDiv>Value from input 2: {displayValue2}</ResultBlockDiv>
        </ResultBlock>
      </HwWrapper>
      </>
  );
}

export default Homework_09;
