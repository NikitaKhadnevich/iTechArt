/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from 'react-query';
import { Box } from '@material-ui/core';
import { useFormik } from 'formik';
import InputAddNote from '../InputAddNote';
import {
  validationADDNOTE,
  initAddNoteValue,
  parseDateOptions,
  NOTES_URL,
  notesList,
  usePostWrapper,
  PostNote,
  InfiniteNotes,
} from '../inputAddReceiver';

const FormikAddNoteContainer = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = usePostWrapper(PostNote, NOTES_URL);

  const formik = useFormik({
    initialValues: initAddNoteValue,
    validationSchema: validationADDNOTE,
    onSubmit: (values, { resetForm }) => {
      const newUserId = Date.now().toString().slice(-4);
      const mutableValues = {
        ...values,
        id: (newUserId - notesList.length).toString(),
        date: new Date().toLocaleString('en-US', parseDateOptions),
      };
      resetForm();
      mutateAsync(mutableValues);
      queryClient.refetchQueries(InfiniteNotes, { exact: true });
    },
  });

  return (
    <Box>
      <InputAddNote formik={formik} />
    </Box>
  );
};

export default FormikAddNoteContainer;
