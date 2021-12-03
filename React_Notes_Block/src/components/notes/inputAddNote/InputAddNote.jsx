/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormAddBox, FormAddGrid, GridButton, AddButton } from './styled';
import { SortNotes } from './inputAddReceiver';

const InputAddNote = ({ formik, setNoteList, noteList }) => {
  const {
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleBlur,
    handleSubmit,
    values: { title, description },
  } = formik;

  const onChangeAccum = (name, e) => {
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <FormAddBox component='form' onSubmit={handleSubmit}>
      <FormAddGrid item xs={12} sm={10} md={9} container spacing={1}>
        <Grid item xs={12} sm={4} md={3} alignItems='center'>
          <TextField
            value={title}
            id='title'
            size='small'
            label='Title'
            variant='filled'
            required
            sx={{ width: '100%' }}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title ? errors.title : ''}
            onChange={onChangeAccum.bind(null, 'title')}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={5}>
          <TextField
            value={description}
            id='description'
            size='small'
            label='Describe'
            variant='filled'
            required
            sx={{ width: '100%' }}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description ? errors.description : ''}
            onChange={onChangeAccum.bind(null, 'describe')}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <SortNotes setNoteList={setNoteList} noteList={noteList} />
        </Grid>
        <GridButton item xs={12} sm={8} md={2}>
          <AddButton type='submit'>Add Note</AddButton>
        </GridButton>
      </FormAddGrid>
    </FormAddBox>
  );
};

export default InputAddNote;

InputAddNote.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  errors: PropTypes.bool,
  touched: PropTypes.bool,
  handleChange: PropTypes.func,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
};

InputAddNote.defaultProps = {
  title: 'title',
  description: 'description',
  errors: 'errors',
  touched: 'touched',
  handleChange: 'handleChange',
  isValid: 'isValid',
  setFieldTouched: 'setFieldTouched',
  handleBlur: 'handleBlur',
  handleSubmit: 'handleSubmit',
};
