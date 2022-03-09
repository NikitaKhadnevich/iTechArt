/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as reactRedux from 'react-redux';

import { configure, shallow, mount, create, render } from 'enzyme';
import configureMockStore from 'redux-mock-store'; // ES6 modules
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AboutPageList from '../aboutPageList';

configure({ adapter: new Adapter() });

describe('About Page', () => {
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  const initialState = {
    userData: [
      {
        id: '3',
        title: 'Some Title',
        description: 'Some describtion',
        date: '10/19/2021, 04:19:12 AM',
        sharedTime: '',
      },
    ],
  };
  const store = mockStore(initialState);
  const sharedList = store.getState().userData;
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('Is it About Page Exist', () => {
    const SharedWrapper = shallow(<AboutPageList />);
    expect(SharedWrapper).toHaveLength(1);
  });
  it('Is it About Page Snap', () => {
    const SharedWrapper = shallow(<AboutPageList />);
    expect(SharedWrapper).toMatchSnapshot();
  });
  it('There is About Page has Title', () => {
    const SharedWrapper = shallow(<AboutPageList />);
    expect(
      SharedWrapper.find('WithStyles(ForwardRef(Typography))').first().text()
    ).toEqual('What am I talking about?');
  });
  it('There is About Page has 2 folders', () => {
    const SharedWrapper = shallow(<AboutPageList />);
    expect(
      SharedWrapper.find('WithStyles(ForwardRef(Typography))')
    ).toHaveLength(2);
  });
  it('are About Folders type are Paragraph', () => {
    const SharedWrapper = shallow(<AboutPageList />);
    expect(
      SharedWrapper.findWhere(
        (n) => n.type() === 'WithStyles(ForwardRef(Typography))'
      )
    );
  });
});
