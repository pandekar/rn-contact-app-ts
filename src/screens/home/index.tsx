import * as React from 'react';
import {View, Text, Alert} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './home.styles';
import {screenConstants} from '../../constants';
import {deleteContact} from '../../services/contact.service';
import {
  fetchInitiateContact,
  reloadContacts,
} from '../../redux/action/contact.action';
import {LoadingMask, ContactList, HomeHeader} from '../../components';

import type {
  Contact,
  InitialState,
  VoidFunction,
  VoidIdFunction,
} from '../../types/index.types';
import type {Props as HomeHeaderProps} from '../../components/homeHeader/homeHeader.types';
import type {Props as ContactListProps} from '../../components/contactList/contactList.types';

const {CONTACT_ADD, CONTACT_DETAIL} = screenConstants;

/**
 * get contact list props
 * @param {Array<Contact>} contacts - contacts
 * @param readContact - read contact function
 * @param updateContact - update contact function
 * @param deleteAlert - delete alert function
 * @returns {ContactListProps} - contact list props value
 */
const _getContactListProps = (
  contacts: Array<Contact>,
  readContact: (item: Contact) => void,
  updateContact: VoidIdFunction,
  deleteAlert: VoidIdFunction,
): ContactListProps => ({
  contacts,
  readContact,
  updateContact,
  deleteAlert,
});

/**
 * get home header props
 * @param refreshContacts - refresh contact function
 * @param createContact - create contact function
 * @returns {HomeHeaderProps} - home header props value
 */
const _getHomeHeaderProps = (
  refreshContacts: VoidFunction,
  createContact: VoidFunction,
): HomeHeaderProps => ({
  refreshContacts,
  createContact,
});

/**
 * Home screen
 * @returns {React.JSX.Element}
 */
const Home = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // saga
  const contacts = useSelector(
    (state: {contactReducer: InitialState}) => state.contactReducer.datas,
  );
  const contactsLoading = useSelector(
    (state: {contactReducer: InitialState}) => state.contactReducer.loading,
  );
  const error = useSelector(
    (state: {contactReducer: InitialState}) => state.contactReducer.error,
  );

  const refreshContacts = () => {
    dispatch(reloadContacts());
  };

  const createContact = () => {
    navigation.navigate(CONTACT_ADD);
  };

  const readContact = (item: Contact) => {
    navigation.navigate(CONTACT_DETAIL, item);
  };

  const updateContact = (id: string) => {
    const contact = {
      msg: 'update',
      id: id,
    };
    navigation.navigate(CONTACT_ADD, contact);
  };

  const deleteAlert = (id: string) =>
    Alert.alert('delete contact?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteContact(id);
          dispatch(reloadContacts());
        },
      },
    ]);

  useFocusEffect(
    React.useCallback(() => {
      if (!contacts.length) {
        dispatch(fetchInitiateContact());
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contacts]),
  );

  return (
    <View style={styles.main}>
      <HomeHeader {..._getHomeHeaderProps(refreshContacts, createContact)} />
      {contactsLoading && <LoadingMask />}
      <View style={styles.listBox}>
        {error && <Text>{error}</Text>}
        {contacts && (
          <ContactList
            {..._getContactListProps(
              contacts,
              readContact,
              updateContact,
              deleteAlert,
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
