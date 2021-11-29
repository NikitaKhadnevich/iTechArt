/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import { useQuery, useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { isValid } from 'date-fns';
import SignUp from '../SignUp';
import {
  validationSchema,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  ERROR_MESSAGES,
  runPOSTuser,
  baseURL,
  initSignUpvalue,
  signIn,
} from '../formsReceiver';

const FormikUp = () => {
  const dispatch = useDispatch();
  const { hasAlready } = ERROR_MESSAGES;
  const MIN_ARR_LENGTH = 1;
  const navToAuth = useNavigate();
  const [isFetch, setFetch] = useState(true);

  const { isLoading, error, data, isFetching } = useQuery('GetUsers', () =>
    fetch(baseURL).then((resUsers) => resUsers.json())
  );
  const { mutateAsync } = useMutation(
    (formdata) => runPOSTuser(baseURL, formdata),
    {
      onSuccess: () => {
        navToAuth(signIn);
        dispatch(IS_SIGN_UP(true));
      },
    }
  );

  const formik = useFormik({
    initialValues: initSignUpvalue,
    validationSchema,
    onSubmit: (values, actions) => {
      const existUser = data.filter((users) => users.email === values.email);
      if (existUser.length === MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(true));
      }
      if (existUser.length < MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(false));
        mutateAsync(values);
        actions.resetForm();
      }
    },
  });

  return (
    <>
      <Container>
        <SignUp
          formik={formik}
          hasAlready={hasAlready}
          setFetch={setFetch} // Will make fetch onSubmit Click. In future
          error={error}
          isLoading={isLoading}
          isFetching={isFetching}
          querryData={data}
        />
      </Container>
    </>
  );
};

export default FormikUp;
