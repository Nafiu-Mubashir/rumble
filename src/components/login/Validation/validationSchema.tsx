import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required')
    .test(
      'email-validity',
      'Email is not in a valid format',
      function (value) {
        const { password } = this.parent;
        if (value && !yup.string().email().isValidSync(value)) {
          return new yup.ValidationError('Email is not in a valid format', null, 'password');
        }
        return true;
      }
    ),
  password: yup
    .string()
    .required('Password is required')
});

export default validationSchema;
