import axios from 'axios';

import type {NewContact} from '../types/index.types';

const BASE_URL = 'https://contact.herokuapp.com/contact';

const getContacts = async () => {
  try {
    const {data} = await axios.get(BASE_URL);

    return data;
  } catch (error: any) {
    throw error.data;
  }
};

const getContact = async (id: string) => {
  try {
    const {data} = await axios.get(BASE_URL + '/' + id);

    return data;
  } catch (error: any) {
    throw error.data;
  }
};

const postContact = async (contact: NewContact) => {
  try {
    const response = await axios.post(BASE_URL, contact);

    return response.status;
  } catch (error: any) {
    throw error.data;
  }
};

const putContact = async (contact: NewContact, id: string) => {
  try {
    const response = await axios.put(BASE_URL + '/' + id, contact);

    return response.status;
  } catch (error: any) {
    throw error.data;
  }
};

const deleteContact = async (id: string) => {
  try {
    const {data} = await axios.delete(BASE_URL + '/' + id);

    return data;
  } catch (error: any) {
    throw error;
  }
};

export {getContacts, getContact, postContact, putContact, deleteContact};
