/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';
import {contactValidation} from '../src/utils';

// Note: import explicitly to use the types shipped with jest.
// import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

test('contact form validation', () => {
  expect(contactValidation('firstname', 'lastname', '1', 'imageurl')).toEqual(
    '',
  );
  expect(contactValidation('first name', 'lastname', '1', 'imageurl')).toEqual(
    'first name must not contain space',
  );
  expect(contactValidation('firstname', 'last name', '1', 'imageurl')).toEqual(
    'last name must not contain space',
  );
  expect(contactValidation('', 'lastname', '1', 'imageurl')).toEqual(
    'please insert first name...',
  );
  expect(contactValidation('firstname', '', '1', 'imageurl')).toEqual(
    'please insert last name...',
  );
  expect(contactValidation('firstname', 'lastname', '', 'imageurl')).toEqual(
    'please insert age...',
  );
  expect(contactValidation('firstname', 'lastname', '101', 'imageurl')).toEqual(
    'age can not be more than 100',
  );
  expect(contactValidation('firstname', 'lastname', '1', undefined)).toEqual(
    'please select your image...',
  );
});
