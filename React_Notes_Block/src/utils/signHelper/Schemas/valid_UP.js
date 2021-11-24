import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  firstName: Yup.string('Enter First Name')
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Enter shorter Frist Name')
    .required('First Name is required'),
  lastName: Yup.string('Enter Last Name')
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Enter a valid Last Name')
    .required('Last Name is required'),
  birthday: Yup.string('Enter Date of Birth')
    .max(10, 'Enter correctly Date of Birth')
    .required('Date of Birth is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

export default validationSchema;
