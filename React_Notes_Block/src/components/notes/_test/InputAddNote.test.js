/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import InputAddNote from '../inputAddNote/InputAddNote';

configure({ adapter: new Adapter() });

describe('InputAddNote', () => {
  const valuesData = { title: 'some title', description: 'some description' };
  const addNoteProps = {
    formik: {
      values: { title: 'some title', description: 'some description' },
      errors: {
        title: 'are title Error',
        description: 'are description Error',
      },
      touched: {
        title: 'are title Error',
        description: 'are descrbtion Error',
      },
      handleChange: jest.fn(),
      isValid: false,
      setFieldTouched: jest.fn(),
      handleBlur: jest.fn(),
      handleSubmit: jest.fn(),
    },
  };

  const addNotePropsDone = {
    formik: {
      values: { title: '', description: '' },
      errors: {
        title: '',
        description: '',
      },
      touched: {
        title: '',
        description: '',
      },
      handleChange: jest.fn(),
      isValid: false,
      setFieldTouched: jest.fn(),
      handleBlur: jest.fn(),
      handleSubmit: jest.fn(),
    },
  };

  const {
    formik: {
      handleSubmit,
      errors: { title, description },
    },
  } = addNoteProps;

  test('drink returns La Croix', () => {
    const beverage = { name: 'La Croix' };
    const drink = jest.fn((beverage) => beverage.name);

    drink(beverage);

    expect(drink).toHaveReturnedWith('La Croix');
  });

  it('Is it InputAddNote Exist', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    expect(addNote).toMatchSnapshot();
    expect(addNote).toHaveLength(1);
  });
  it('InputAddNote Has only 2 fields', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    expect(addNote.find('ForwardRef(TextField)')).toHaveLength(2);
  });
  it('InputAddNote Has Title field', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    expect(addNote.find('ForwardRef(TextField)').first().props().id).toEqual(
      'title'
    );
  });
  it('InputAddNote Has Description field', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    const notesFields = addNote.findWhere(
      (n) => n.type('ForwardRef(TextField)') && n.props().id === 'description'
    );
    expect(notesFields).toHaveLength(1);
  });
  it('Each fields are Required', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    const notesFields = addNote.findWhere(
      (n) => n.type('ForwardRef(TextField)') && n.props().required === true
    );
    expect(notesFields).toHaveLength(2);
  });

  it('There are No errors inputs Title', () => {
    const addNote = shallow(<InputAddNote {...addNotePropsDone} />);
    const {
      formik: {
        errors: { title, description },
      },
    } = addNotePropsDone;
    const notesFields = addNote.findWhere(
      (n) => n.type('ForwardRef(TextField)') && n.props().helperText === title
    );
    expect(notesFields).toHaveLength(2);
  });
  it('There are No errors inputs Description', () => {
    const addNote = shallow(<InputAddNote {...addNotePropsDone} />);
    const {
      formik: {
        errors: { title, description },
      },
    } = addNotePropsDone;
    const notesFields = addNote.findWhere(
      (n) =>
        n.type('ForwardRef(TextField)') && n.props().helperText === description
    );
    expect(notesFields).toHaveLength(2);
  });

  it('There are error In Title', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    const notesFields = addNote.findWhere(
      (n) => n.type('ForwardRef(TextField)') && n.props().helperText === title
    );
    expect(notesFields).toHaveLength(1);
  });
  it('There are error In Description', () => {
    const addNote = shallow(<InputAddNote {...addNoteProps} />);
    const notesFields = addNote.findWhere(
      (n) =>
        n.type('ForwardRef(TextField)') && n.props().helperText === description
    );
    expect(notesFields).toHaveLength(1);
  });
  it('Test Add Note Event', () => {
    const actionForm = shallow(<InputAddNote {...addNoteProps} />);
    const {
      formik: { handleSubmit, values },
    } = addNoteProps;
    actionForm.find('Styled(ForwardRef(Box))').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
