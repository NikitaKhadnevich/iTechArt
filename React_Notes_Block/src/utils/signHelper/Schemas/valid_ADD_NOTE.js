import * as Yup from 'yup';
import { string } from 'yup';

const validationADDNOTE = Yup.object({
  title: string('Enter title')
    .min(2, 'Title must contain at least 2 characters')
    .max(30, 'Describe must contain no more then 30 characters')
    .matches(/(^[aA-zZ\s]+$)/, 'Only alphabets please')
    .matches(/(?=.*[A-Z])/, 'Capitalized, please')
    .required('Title is required'),
  description: string('Enter description')
    .min(2, 'Description must contain at least 2 characters')
    .max(200, 'Description must contain no more then 200 characters')
    .matches(/(^[aA-zZ\s]+$)/, 'Only alphabets please')
    .required('Description is required'),
});

export default validationADDNOTE;
