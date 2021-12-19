/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SignUp from '../SignUp';

configure({ adapter: new Adapter() }); // ES6 modules

describe('SignUp', () => {
  const formik = {
    errors: false,
    touched: false,
    handleChange: jest.fn(),
    isValid: false,
    setFieldTouched: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
    values: {
      email: '',
      firstName: '',
      lastName: '',
      birthday: '',
      password: '',
      confirmPassword: '',
      sharedNotes: [],
    },
  };
  const signUpLoaded = {
    formik,
    isFetching: false,
    isLoading: false,
    hasAlready: 'some Text',
  };
  const signUpLoading = {
    formik,
    isFetching: true,
    isLoading: true,
    hasAlready: 'some Text',
  };

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Is it SignUp Exist and Loaded ', () => {
    const signInWrapper = shallow(<SignUp {...signUpLoaded} />);
    expect(signInWrapper).toMatchSnapshot();
    expect(signInWrapper).toHaveLength(1);
  });

  it('should components data are loading/Fetching', () => {
    const loadingWrapper = shallow(<SignUp {...signUpLoading} />);
    expect(loadingWrapper.find('Spinner')).toHaveLength(1);
    expect(loadingWrapper).toMatchSnapshot();
  });
});
