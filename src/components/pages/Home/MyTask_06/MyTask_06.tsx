import { MyTaskWrapper, FormContainer, ResultContainer } from "./styles";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import { useState } from "react";

function MyTask_06() {

    const [formData, setFormData] = useState({
        userName: "",
        userAge: "",
      });
    
      const [errors, setErrors] = useState({
        userName: "",
        userAge: "",
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    
        // Очистка помилки при введенні даних
        setErrors((prev) => ({ ...prev, [name]: value ? "" : prev[name] }));
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    
        // Перевірка, чи всі поля заповнені
        const newErrors = {
          userName: formData.userName ? "" : "Name is required",
          userAge: formData.userAge ? "" : "Age is required",
        };
    
        setErrors(newErrors);
    
        // Якщо немає помилок - відправляємо форму
        if (!newErrors.userName && !newErrors.userAge) {
          console.log("Form submitted successfully!", formData);
        //   alert("Form submitted successfully!");
        }
      };
    

    return (
        <>
            <MyTaskWrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <Input 
                        name="userName"
                        type="text"
                        label="User name:"
                        placeholder="Write here your name"
                        value={formData.userName}
                        onChange={handleChange}
                        ></Input>
                        {errors.userName && <p style={{color: "red"}}>{errors.userName}</p>}
                    <Input 
                        name="userAge"
                        type="number"
                        label="User age:"
                        placeholder="Write here your age"
                        min={1}
                        max={125}
                        value={formData.userAge}
                        onChange={handleChange}
                        ></Input>
                        {errors.userAge && <p style = {{color: "red"}}>{errors.userAge}</p>}
                    <Button type="submit" name="Submit"/>
                </FormContainer>

                <ResultContainer>

                </ResultContainer>
            </MyTaskWrapper>
        </>
    )
}

export default MyTask_06;