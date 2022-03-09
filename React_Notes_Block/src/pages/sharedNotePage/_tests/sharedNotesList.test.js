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
import { QueryClient, QueryClientProvider } from 'react-query';
import SharedNotesList from '../sharedNotesList';

configure({ adapter: new Adapter() });

describe('Shared Notes', () => {
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
  const queryClient = new QueryClient();
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('Is it ItemsNavi Exist', () => {
    const SharedWrapper = shallow(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SharedNotesList />
        </QueryClientProvider>
      </Provider>
    );
    expect(SharedWrapper).toHaveLength(1);
  });
  it('Is it ItemsNavi Snap', () => {
    const SharedWrapper = shallow(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <SharedNotesList />
        </QueryClientProvider>
      </Provider>
    );
    expect(SharedWrapper).toMatchSnapshot();
  });
});
