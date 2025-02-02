import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { EmployeeFormContainer, Title, InputsContainer } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Field full name is required")
      .min(5, "Min 5 symbols")
      .max(50, "Max 50 symbols"),
    
    age: Yup.number()
      .required("Field age is required")
      .typeError("Age must be a number")
      .min(18, "Min age - 18")
      .max(80, "Max age - 80"),

    jobTitle: Yup.string()
      .max(30, "Max 30 symbols")
      .optional(),

    termsAndConditions: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
  });

  const formik = useFormik({
    initialValues: {
        fullName: "",
        age: 18,
        jobTitle: "",
        termsAndConditions: false,
    } as unknown as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    }
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee Form</Title>
      <InputsContainer>
        <Input
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter your full name"
          error={formik.errors.fullName}
        />
        <Input
          name="age"
          label="Age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter your age"
          error={formik.errors.age}
        />
        <Input
          name="jobTitle"
          label="Job Title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          placeholder="Enter your job title"
          error={formik.errors.jobTitle}
        />
        <label>
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={formik.values.termsAndConditions}
            onChange={formik.handleChange}
          />
          I accept the terms and conditions
        </label>
        {formik.errors.termsAndConditions && (
          <p style={{ color: "red" }}>{formik.errors.termsAndConditions}</p>
        )}
      </InputsContainer>
      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;