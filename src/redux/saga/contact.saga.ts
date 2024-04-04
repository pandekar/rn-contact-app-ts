import {takeLatest, call, put} from 'redux-saga/effects';

import {reduxConstants} from '../../constants';
import {fetchContactSuccess, fetchContactError} from '../action/contact.action';
import {getContacts} from '../../services/contact.service';

function* fetchContact() {
  try {
    const contacts = yield call(getContacts);

    yield put(fetchContactSuccess(contacts.data));
  } catch (error) {
    yield put(fetchContactError(error.message));

    // handle error sementara
    // yield put(fetchContactError('terjadi kesalahan'));
  }
}

function* watchContacts() {
  yield takeLatest(reduxConstants.FETCH_CONTACT, fetchContact);
}

export default watchContacts;
