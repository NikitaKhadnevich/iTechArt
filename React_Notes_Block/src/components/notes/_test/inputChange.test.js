/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import InputChange from '../InputChange';

configure({ adapter: new Adapter() }); // ES6 modules

describe('InputChange', () => {
  const inputChangeProps = {
    isChange: true,
    description: 'some descriprion',
    handleSaveNote: jest.fn(),
    id: 2,
    handleDelete: jest.fn(),
    index: 1,
    currentState: [
      {
        id: '',
        title: 'Some Title',
        description: 'Some description',
        date: '10/22/2021, 04:10:12 PM',
        isActive: false,
        isChange: false,
        isShared: false,
        sharedTime: '',
      },
    ],
  };

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Is it InputChange Form Exist', () => {
    const inputChanger = shallow(<InputChange {...inputChangeProps} />);
    expect(inputChanger).toMatchSnapshot();
    expect(inputChanger).toHaveLength(1);
  });
  it('Called Note Changer', () => {
    const inputChanger = shallow(<InputChange {...inputChangeProps} />);
    inputChangeProps.isChange = true;
    expect(inputChanger.find('ForwardRef(Zoom)').props().in).toBeTruthy();
  });
  it('InputChange Has Current Id and Index', () => {
    const inputChanger = shallow(<InputChange {...inputChangeProps} />);
    expect(inputChanger.find('ButtonSave').props().id).toBeTruthy();
    expect(inputChanger.find('ButtonDelete').props().id).toBeTruthy();
    expect(inputChanger.find('ButtonDelete').props().index).toBeTruthy();
  });
});
