import { Formik } from "formik";
import * as Yup from "yup";

const SingupForm = () => {
    return (
        <Formik
            initialValues={ (name: "", email: "")}
            validationSchema={Yup.object({
                name: Yup.string().required("Обов'язкове поле"),
                email: Yup.string().email("Невірний email").required("Обов'язкове поле"),
            })}
            onSubmit={ (values, {setSubmiting}) => {
                console.log("Дані форми: ", values);
                setSubmiting(false);
            }}
        >

        </Formik>
    );
};

export default SingupForm;