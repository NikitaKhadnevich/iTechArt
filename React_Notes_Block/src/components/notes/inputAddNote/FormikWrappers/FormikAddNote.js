import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import InputAddNote from '../InputAddNote';
import {
  validationADDNOTE,
  initAddNoteValue,
  parseDateOptions,
  runPOSTuser,
  notesURL,
} from '../inputAddReceiver';

const FormikAddNoteContainer = ({ setNoteList, noteList }) => {
  const addNoteMutation = useMutation('PostNote', (newNote) =>
    runPOSTuser(notesURL, newNote)
  );
  const formik = useFormik({
    initialValues: initAddNoteValue,
    validationSchema: validationADDNOTE,
    onSubmit: (values, { resetForm }) => {
      const mutableValues = {
        id: Math.random().toFixed(3) * noteList.length,
        ...values,
        date: new Date().toLocaleString('en-US', parseDateOptions),
      };
      setNoteList([mutableValues, ...noteList]);
      resetForm();
      addNoteMutation.mutate(mutableValues);
    },
  });

  return (
    <Box>
      <InputAddNote
        formik={formik}
        setNoteList={setNoteList}
        noteList={noteList}
      />
    </Box>
  );
};

export default FormikAddNoteContainer;

FormikAddNoteContainer.propTypes = {
  setNoteList: PropTypes.func,
  noteList: PropTypes.string,
};

FormikAddNoteContainer.defaultProps = {
  setNoteList: 'setNoteList',
  noteList: 'noteList',
};
