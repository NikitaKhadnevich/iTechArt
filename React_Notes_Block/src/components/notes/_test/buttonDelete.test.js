/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as reactRedux from 'react-redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ButonDelete from '../actionsButtons/ButonDelete';

configure({ adapter: new Adapter() }); // ES6 modules

describe('ButonDelete', () => {
  const butonDeleteProps = {
    index: 1,
    id: 2,
    handleDelete: jest.fn(
      (index, id) => `call delete with index: ${index} and id: ${id}`
    ),
  };

  it('Is it ButonDelete Exist', () => {
    const buttonDelete = shallow(<ButonDelete {...butonDeleteProps} />);
    expect(buttonDelete).toMatchSnapshot();
    expect(buttonDelete).toHaveLength(1);
  });
  it('Test Delete Event', () => {
    const buttonDelete = shallow(<ButonDelete {...butonDeleteProps} />);
    const { index, id, handleDelete } = butonDeleteProps;
    buttonDelete.find('ForwardRef(IconButton)').simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
    expect(handleDelete).toHaveBeenCalledWith(index, id);
  });
});
