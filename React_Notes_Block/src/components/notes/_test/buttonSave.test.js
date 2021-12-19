/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ButtonSave from '../actionsButtons/ButtonSave';

configure({ adapter: new Adapter() }); // ES6 modules

describe('ButtonSave', () => {
  const buttonSaveProps = {
    id: 1,
    handleSaveNote: jest.fn(
      (id, updateDescription) =>
        `call save with index: ${id} and data: ${updateDescription}`
    ),
    updateDescription: [
      {
        id: '',
        title: 'New Title',
        description: 'Some description',
        date: '10/22/2021, 04:10:12 PM',
        isActive: false,
        isChange: false,
        isShared: false,
        sharedTime: '',
      },
    ],
  };

  it('Is it ButtonSave Exist', () => {
    const buttonSave = shallow(<ButtonSave {...buttonSaveProps} />);
    expect(buttonSave).toMatchSnapshot();
    expect(buttonSave).toHaveLength(1);
  });
  it('Test Save Event', () => {
    const buttonSave = shallow(<ButtonSave {...buttonSaveProps} />);
    const { id, handleSaveNote, updateDescription } = buttonSaveProps;
    buttonSave.find('ForwardRef(IconButton)').simulate('click');
    expect(handleSaveNote).toHaveBeenCalledTimes(1);
    expect(handleSaveNote).toHaveBeenCalledWith(id, updateDescription);
  });
});
