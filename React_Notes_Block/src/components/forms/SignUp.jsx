/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SignWrapper, SignBox, FormBox, FormGrid } from './styled';
import {
  isSignUpError,
  Spinner,
  SignUpError,
  SignUpSuccess,
} from './formsReceiver';
import SignUpGrid from './SignInputs/SignUpGrid';

export default function SignUp({ formik, hasAlready, isFetching, isLoading }) {
  const signUpError = useSelector(isSignUpError);
  const {
    values,
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleBlur,
    handleSubmit,
  } = formik;

  const onChangeAccum = (name, e) => {
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <SignWrapper component='main'>
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <SignBox>
          {signUpError ? (
            <SignUpError hasAlready={hasAlready} />
          ) : (
            <SignUpSuccess />
          )}
          <FormBox
            component='form'
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <SignUpGrid
              values={values}
              touched={touched}
              onChangeAccum={onChangeAccum}
              handleBlur={handleBlur}
              errors={errors}
              isValid={isValid}
            />
          </FormBox>
        </SignBox>
      )}
    </SignWrapper>
  );
}

SignUp.propTypes = {
  values: PropTypes.string,
  hasAlready: PropTypes.string,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
};

SignUp.defaultProps = {
  values: 'values',
  hasAlready: 'hasAlready',
  isLoading: 'isLoading',
  isFetching: 'isFetching',
};
