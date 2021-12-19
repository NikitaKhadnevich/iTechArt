/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store';
import SignUpGrid from '../SignInputs/SignUpGrid';

configure({ adapter: new Adapter() }); // ES6 modules

describe('SignIn', () => {
  const signProps = {
    values: {
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      birthday: 'birthday',
      password: 'password',
      confirmPassword: 'confirmPassword',
    },
    errors: false,
    touched: false,
    handleChange: jest.fn(),
    isValid: false,
    setFieldTouched: jest.fn(),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn(),
  };

  it('Is it SignUp Form Exist', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper).toMatchSnapshot();
    expect(signGridWrapper).toHaveLength(1);
  });

  it('Is Button Disabled', () => {
    signProps.isValid = false;
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(
      signGridWrapper.find('WithStyles(ForwardRef(Button))').props().disabled
    ).toBeTruthy();
  });
  it('Is Button Enabled', () => {
    signProps.isValid = true;
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(
      signGridWrapper.find('WithStyles(ForwardRef(Button))').props().disabled
    ).toBeFalsy();
  });

  it('Form Has email folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper.find('SignEmail').props().email).toEqual('email');
  });
  it('Form Has firstName folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper.find('SignUpFirstName').props().firstName).toEqual(
      'firstName'
    );
  });
  it('Form Has lastName folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper.find('SignUpLastName').props().lastName).toEqual(
      'lastName'
    );
  });
  it('Form Has birthday folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper.find('SignUpBirth').props().birthday).toEqual(
      'birthday'
    );
  });
  it('Form Has password folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(signGridWrapper.find('SignPassword').props().password).toEqual(
      'password'
    );
  });
  it('Form Has confirmPassword folder', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    expect(
      signGridWrapper.find('SignUpConfirmPass').props().confirmPassword
    ).toEqual('confirmPassword');
  });
  it('Form Has Correct User-data in any folders', () => {
    const signGridWrapper = shallow(<SignUpGrid {...signProps} />);
    signProps.isValid = true;
    expect(signGridWrapper.find('SignEmail').props().errors).toBeFalsy();
    expect(signGridWrapper.find('SignUpFirstName').props().errors).toBeFalsy();
    expect(signGridWrapper.find('SignUpLastName').props().errors).toBeFalsy();
    expect(signGridWrapper.find('SignUpBirth').props().errors).toBeFalsy();
    expect(signGridWrapper.find('SignPassword').props().errors).toBeFalsy();
    expect(
      signGridWrapper.find('SignUpConfirmPass').props().errors
    ).toBeFalsy();
    expect(
      signGridWrapper.find('WithStyles(ForwardRef(Button))').props().disabled
    ).toBeFalsy();
  });
});
