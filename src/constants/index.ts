const reduxConstants = {
  REFRESH_CONTACTS: 'REFRESH_CONTACTS',
  FETCH_CONTACT: 'FETCH_CONTACTS',
  FETCH_CONTACT_SUCCESS: 'FETCH_CONTACT_SUCCESS',
  FETCH_CONTACT_ERROR: 'FETCH_CONTACT_ERROR',
  UPDATE_CONTACT: 'UPDATE_CONTACT',
  UPDATE_CONTACT_SUCCESS: 'UPDATE_CONTACT_SUCCESS',
  UPDATE_CONTACT_ERROR: 'UPDATE_CONTACT_ERROR',
};

const screenConstants = {
  HOME: 'HOME',
  CONTACT_ADD: 'CONTACT_ADD',
  CONTACT_DETAIL: 'CONTACT_DETAIL',
};

const colorConstants = {
  primary: '#191D88',
  secondary: '#1450A3',
  thirdary: '#FFC436',
};

const formActionConstants = {
  CREATE: 'create',
  UPDATE: 'update',
};

export {reduxConstants, screenConstants, colorConstants, formActionConstants};
