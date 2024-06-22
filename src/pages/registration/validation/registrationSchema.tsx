import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  password: yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(/[\W_]/, 'Password must contain at least one special character')
  .required('Password is required'),
  retypePassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Re-type Password is required'),
  email: yup.string().email('Invalid email').required('E-mail is required'),
  retypeEmail: yup.string()
    .oneOf([yup.ref('email')], 'E-mails must match')
    .required('Re-type E-mail is required'),
  country: yup.string().required('Country is required'),
  birthday: yup.date().required('Birthday is required'),
  referrer: yup.string().nullable(), // Allow null or empty string
  address: yup.string().nullable(), // Allow null or empty string
  address2: yup.string().nullable(), // Allow null or empty string
  city: yup.string().nullable(), // Allow null or empty string
  state: yup.string().nullable(), // Allow null or empty string
  postalCode: yup.string().nullable(), // Allow null or empty string
  phoneNumber: yup.string().nullable(), // Allow null or empty string
});

export default registrationSchema;
