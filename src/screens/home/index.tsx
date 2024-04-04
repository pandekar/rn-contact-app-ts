import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {
  useRoute,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './home.styles';
import {screenConstants} from '../../constants';
import {getContacts, deleteContact} from '../../services/contact.service';
import {
  fetchInitiateContact,
  reloadContacts,
} from '../../redux/action/contact.action';
import {Contact, InitialState} from '../../types/index.types';

const {CONTACT_ADD, CONTACT_DETAIL} = screenConstants;

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

  const readContact = (id: string) => {
    navigation.navigate(CONTACT_DETAIL, id);
  };

  const updateContact = (id: string) => {
    const contact = {
      msg: 'update',
      id: id,
    };
    navigation.navigate(CONTACT_ADD, contact);
  };

  const deleteContact = () => {
    console.log('delete');
  };

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
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact List</Text>
        <TouchableOpacity>
          <Icon
            name="rotate"
            size={30}
            color="white"
            onPress={() => refreshContacts()}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="plus"
            size={30}
            color="white"
            onPress={() => createContact()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listBox}>
        {contactsLoading && <Text style={{fontSize: 20}}>Loading...</Text>}
        {error && <Text>{error}</Text>}
        {contacts && (
          <FlatList
            data={contacts}
            renderItem={({item}) => (
              <View style={styles.contact}>
                <TouchableOpacity onPress={() => readContact(item.id)}>
                  <View>
                    {item.photo != 'N/A' ? (
                      <Image
                        style={styles.image}
                        source={{
                          uri: item.photo,
                        }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={require('../../images/unknown.png')}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <View>
                  <View style={styles.itemContent}>
                    <Text style={styles.name}>
                      {item.firstName} {item.lastName}
                    </Text>
                    <Text style={{fontSize: 15, color: 'white'}}>age: {item.age}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <View>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => updateContact(item.id)}>
                        <Icon name="pencil" size={25} color="whitesmoke" />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity style={styles.button}>
                        <Icon
                          name="trash"
                          size={25}
                          color="firebrick"
                          onPress={() => deleteAlert(item.id)}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default Home;
