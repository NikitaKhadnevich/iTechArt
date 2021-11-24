/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Container } from '@material-ui/core';
import { Formik, useFormik } from 'formik';
import SignUp from '../SignUp';
import { validationSchema } from '../formsReceiver';

const FormikUp = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      birthday: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <SignUp formik={formik} />
    </Container>
  );
};

export default FormikUp;
