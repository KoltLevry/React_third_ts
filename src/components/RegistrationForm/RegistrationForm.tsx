import * as Yup from "yup";

const schema = Yup.object().shape({
    fullname: Yup.string()
        .required("Fuild fullname is required")
        .min(3, "Min 3 symbols")
        .max(50, "Max 50 symbols")
        .typeError("Fullname must be string"),

    username: Yup.string()
        .required("Field username is required")
        .min(5, "Min 5 symbols")
        .matches(/(\w+)(A-za-z+)(_.+)/)
        .matches(/^[a-zA-Z0-9._]+$/, "Only letters, numbers, underscore, and dots allowed"),

    email: Yup.string()
        .required('Fild email is required')
        .email("Invalid email format"),

    password: Yup.string()
        .required("Fild password required")
        .min(8, "Min 8 symbols")
        .matches(/(A-Za-z+)(\w+)(@#%\$)/),

    confirmpassword: Yup.password, 
    phonenumber: Yup.string()
        .min(10, "Min 10 symbols")
        .match(/\w+/)
    , dateofbirth: Yup.date()
    , gender: Yup.gender()
    , country: Yup.string()
        .required("Fied country is required")
    , termsandcondition: Yup.boolean()
})

function RegistrationForm() {

    return(
        <>
        </>
    );
}

export default RegistrationForm;