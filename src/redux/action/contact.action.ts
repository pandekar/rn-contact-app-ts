import {reduxConstants} from '../../constants';

const {
  REFRESH_CONTACTS,
  FETCH_CONTACT,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
} = reduxConstants;

const reloadContacts = () => {
  return {
    type: REFRESH_CONTACTS,
  };
};

const fetchInitiateContact = () => {
  return {
    type: FETCH_CONTACT,
  };
};

const fetchContactSuccess = data => {
  return {
    type: FETCH_CONTACT_SUCCESS,
    data,
  };
};

const fetchContactError = error => {
  return {
    type: FETCH_CONTACT_ERROR,
    error,
  };
};

const updateContact = (contact, id) => {
  return {
    type: UPDATE_CONTACT,
    data: {
      contact,
      id,
    },
  };
};

const updateContactSuccess = contact => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    dataUpdate: contact,
  };
};

const updateContactError = error => {
  return {
    type: UPDATE_CONTACT_ERROR,
    error,
  };
};

export {
  reloadContacts,
  fetchInitiateContact,
  fetchContactSuccess,
  fetchContactError,
  updateContact,
  updateContactSuccess,
  updateContactError,
};
