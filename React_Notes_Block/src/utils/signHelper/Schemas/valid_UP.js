import * as Yup from 'yup';
import { date, string } from 'yup';
import { today, parseDateString } from '../dateValidHelper';

const validationSchema = Yup.object({
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  firstName: string('Enter First Name')
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Enter shorter Frist Name')
    .required('First Name is required'),
  lastName: string('Enter Last Name')
    .min(2, 'Must be longer than 2 characters')
    .max(20, 'Enter a valid Last Name')
    .required('Last Name is required'),
  birthday: date('Enter Date of Birth')
    .transform(parseDateString)
    .max(today)
    .required('Date of Birth is required'),
  password: string('')
    .min(4, 'Password must contain at least 4 characters')
    .required('Enter your password'),
  confirmPassword: string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match'),
});

export default validationSchema;
