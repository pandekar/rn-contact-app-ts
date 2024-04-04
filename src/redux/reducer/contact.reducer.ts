import {reduxConstants} from '../../constants';

import type {InitialState} from '../../types/index.types';

const {
  REFRESH_CONTACTS,
  FETCH_CONTACT,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
} = reduxConstants;

const initialState: InitialState = {
  datas: [],
  dataAdd: {
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  },
  loading: false,
  error: undefined,
  dataUpdate: {
    id: '',
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  },
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_CONTACTS:
      return {
        datas: [],
      };
    case FETCH_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        datas: action.data,
      };
    case FETCH_CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CONTACT_SUCCESS:
      const oldContacts = [...state.datas];
      const newContacts = oldContacts.map(contact => {
        if (contact.id === action.dataUpdate.id) {
          contact.age = action.dataUpdate.age;
          contact.firstName = action.dataUpdate.firstName;
          contact.lastName = action.dataUpdate.lastName;
          contact.photo = action.dataUpdate.photo;
        }
        return contact;
      });
      return {
        ...state,
        datas: newContacts,
      };
    case UPDATE_CONTACT_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default contactReducer;
