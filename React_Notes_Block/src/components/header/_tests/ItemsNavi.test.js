/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import { configure, shallow, mount, create, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureMockStore from 'redux-mock-store'; // ES6 modules
import { BrowserRouter as Router } from 'react-router-dom';
import ItemsNavi from '../ItemsNavi';
import { isSignIn, sharedNotes, userData } from '../headerReceiver';

configure({ adapter: new Adapter() });

describe('Header', () => {
  const middlewares = [];
  const mockStore = configureMockStore(middlewares);
  const initialState = { status: true }; // Init StorContain
  const store = mockStore(initialState);
  const { status } = store.getState(); // useSelector

  beforeEach(() => {
    const useSelector = jest.spyOn(reactRedux, 'useSelector');
    useSelector.mockReturnValue(status);
    if (status) {
      useSelector.mockReturnValue([{ sharedNotes: [1, 2, 3, 4, 5] }]);
    }
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  let ItemsWrapper;
  beforeEach(() => {
    ItemsWrapper = shallow(
      <Provider store={store}>
        <Router>
          <ItemsNavi />
        </Router>
      </Provider>
    );
  });

  it('Is it ItemsNavi Exist', () => {
    expect(ItemsWrapper).toHaveLength(1);
  });
  it('Is it ItemsNavi User Sign In And has Shared Notes', () => {
    const ItemsWrapper = shallow(<ItemsNavi />);
    expect(ItemsWrapper).toMatchSnapshot();
  });
  it('should contain Links', () => {
    const ItemsWrapper = shallow(<ItemsNavi />);
    expect(
      ItemsWrapper.find('WithStyles(ForwardRef(Typography))')
    ).toHaveLength(3);
  });
  it('should contain Notes or About Nav', () => {
    const ItemsWrapper = shallow(<ItemsNavi />);
    expect(
      ItemsWrapper.find('WithStyles(ForwardRef(Typography))').first().text()
    ).toEqual('Notes');
  });
  it('should contain Notes', () => {
    expect(
      ItemsWrapper.findWhere(
        (n) =>
          n.type() === 'WithStyles(ForwardRef(Typography))' &&
          n.contains('Notes')
      )
    );
  });
  it('should contain Sign Up', () => {
    expect(
      ItemsWrapper.findWhere(
        (n) =>
          n.type() === 'WithStyles(ForwardRef(Typography))' &&
          n.contains('Sign Up')
      )
    );
  });
  it('should contain Sign In', () => {
    expect(
      ItemsWrapper.findWhere(
        (n) =>
          n.type() === 'WithStyles(ForwardRef(Typography))' &&
          n.contains('Sign In')
      )
    );
  });
  it('should contain Shared Notes with Shared Data', () => {
    expect(
      ItemsWrapper.findWhere(
        (n) =>
          n.type() === 'WithStyles(ForwardRef(Typography))' &&
          n.contains(`Shared Notes (5ee)`)
      )
    );
  });
});
