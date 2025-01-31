export interface RegistrationFormValues {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phonenumber: string;
    dateOfBirth: Date;
    gender: "Male" | "Female" | "Other";
    country: string;
    termsAndCondition: boolean;
}