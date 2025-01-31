import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { LoginFormValues } from "./types";

function LoginForm() {
  // 2️⃣ Створюємо схему валідації (schema)
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Field email is required')
      .email('Field has type email')
      .max(20, 'Max 20 symbols')
      .min(10, 'Min 10 symbols')
      .typeError('Email must be string'),
    password: Yup.number()
      .required('Field password is required')
      .typeError('Password must be number')
      .test('Check min password length', 'Min 10 symbols', (value) => String(value).length >= 10)
      .test('Check max password length', 'Max 20 symbols', (value) => String(value).length <= 20)
  })

  // 3️⃣ Використовуємо Formik для обробки форми
  const formik = useFormik({
    initialValues: { // → початкові значення полів
      email: '',
      password: '',
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      console.table(values)
    }
  })

  console.log(formik);

  // 4️⃣ Описуємо вигляд форми (JSX) 
  return (
     <LoginFormContainer onSubmit={formik.handleSubmit}> {/*  → запускає перевірку та викликає onSubmit  */}
     {/*  */}
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          name="email"
          label="Email*" 
          value={formik.values.email} 
          onChange={formik.handleChange}
          placeholder="Enter your email"
          // error={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          // error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}
export default LoginForm;