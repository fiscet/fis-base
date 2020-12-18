import React from 'react';
import { shallow } from 'enzyme';
import SignUpPage from './sign-up.component';

it('should render SignUpPage component', () => {
  expect(shallow(<SignUpPage />)).toMatchSnapshot();
});
