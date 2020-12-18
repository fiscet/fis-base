import React from 'react';
import { shallow } from 'enzyme';
import SignInPage from './sign-in.component';

it('should render SignInPage component', () => {
  expect(shallow(<SignInPage />)).toMatchSnapshot();
});
