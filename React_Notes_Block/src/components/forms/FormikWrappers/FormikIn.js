/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Container } from '@material-ui/core';
import { useFormik } from 'formik';
import SignIn from '../SignIn';
import { validationSchema } from '../formsReceiver';

const FormikIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <SignIn formik={formik} />
    </Container>
  );
};

export default FormikIn;
