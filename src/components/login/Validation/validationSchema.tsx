import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email or username is required')
    .test(
      'email-or-username',
      'Must be a valid email or username',
      function (value) {
        // Check if the value is either a valid email or a non-empty string (username)
        const isEmailValid = yup.string().email().isValidSync(value);
        const isUsernameValid = typeof value === 'string' && value.trim().length > 0;
        return isEmailValid || isUsernameValid;
      }
    ),
  password: yup
    .string()
    .required('Password is required')
});

export default validationSchema;
