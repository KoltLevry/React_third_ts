import { InputsContainer, Lesson09Wrapper, ResultInput } from "./styles";
import Input from "../../../Input/Input";

import { ChangeEvent, useState } from "react";

function Lesson09() {
    // State for name
  const [userNameValue, seUserNameValue] = useState<string>('');

  const onChangeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    seUserNameValue(event.target.value)
  }

    // State for age
  const [userAgeValue, setUserAgeValue] = useState<string>("");

  const onChangeInputAge = (event: ChangeEvent<HTMLInputElement>) => {
    setUserAgeValue(event.target.value);
  }



  return (
    <Lesson09Wrapper>
      {/* Simple input - uncontrole component  */}
      <InputsContainer>
        <Input
          name="user_name"
          label="User name"
          id="name_id"
          placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeInputName}
        />
        <Input
          name="user_age"
          label="User age"
          id="age_id"
          placeholder="Enter your age"
          value={userAgeValue}
          onChange={onChangeInputAge}
        />
        <ResultInput>{userNameValue} - {userAgeValue}</ResultInput>
      </InputsContainer>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
