import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Visit404List from '../Visit404List';

configure({ adapter: new Adapter() });

describe('About Page', () => {
  it('Is it ErrorPage Exist', () => {
    const SharedWrapper = shallow(<Visit404List />);
    expect(SharedWrapper).toHaveLength(1);
  });
  it('Is it ErrorPage Snap', () => {
    const SharedWrapper = shallow(<Visit404List />);
    expect(SharedWrapper).toMatchSnapshot();
  });
  it('There is ErrorPage has Title', () => {
    const SharedWrapper = shallow(<Visit404List />);
    expect(
      SharedWrapper.find('WithStyles(ForwardRef(Typography))').first().text()
    ).toEqual('Something went wrong - 404');
  });
  it('There is ErrorPage has 1 folders', () => {
    const SharedWrapper = shallow(<Visit404List />);
    expect(
      SharedWrapper.find('WithStyles(ForwardRef(Typography))')
    ).toHaveLength(1);
  });
  it('are ErrorPage Folder type are Paragraph', () => {
    const SharedWrapper = shallow(<Visit404List />);
    expect(
      SharedWrapper.findWhere(
        (n) => n.type() === 'WithStyles(ForwardRef(Typography))'
      )
    );
  });
});
