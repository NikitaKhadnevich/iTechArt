import * as Yup from 'yup';
import { string } from 'yup';

const validationIN = Yup.object({
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('')
    .min(4, 'Password must contain at least 4 characters')
    .required('Enter your password'),
});

export default validationIN;
