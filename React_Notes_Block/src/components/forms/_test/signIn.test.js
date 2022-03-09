/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SignIn from '../SignIn';

configure({ adapter: new Adapter() }); // ES6 modules

describe('SignIn', () => {
  const formik = {
    values: { email: 'email', password: 'password' },
    errors: false,
    touched: false,
    handleChange: jest.fn(),
    isValid: false,
    setFieldTouched: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
  };
  const signInLoaded = {
    formik,
    isFetching: false,
    isLoading: false,
  };

  const signInLoading = {
    formik,
    isFetching: true,
    isLoading: true,
  };

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Is it SignIn Exist and Loaded ', () => {
    const signInWrapper = shallow(<SignIn {...signInLoaded} />);
    expect(signInWrapper).toMatchSnapshot();
    expect(signInWrapper).toHaveLength(1);
  });

  it('should components data are loading/Fetching', () => {
    const loadingWrapper = shallow(<SignIn {...signInLoading} />);
    expect(loadingWrapper.find('Spinner')).toHaveLength(1);
    expect(loadingWrapper).toMatchSnapshot();
  });
});
