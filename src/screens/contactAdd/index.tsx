import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation, useRoute} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';

import styles from './contactAdd.styles';
import {contactValidation} from '../../utils';
import {postContact, putContact} from '../../services/contact.service';
import {reloadContacts} from '../../redux/action/contact.action';
import {screenConstants, formActionConstants} from '../../constants';

import type {InitialState} from '../../types/index.types';

const {HOME} = screenConstants;
const {CREATE, UPDATE} = formActionConstants;

/**
 * Contact Add screen
 * @returns {React.JSX.Element}
 */
const ContactAdd = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
  const contacts = useSelector(
    (state: {contactReducer: InitialState}) => state.contactReducer.datas,
  );

  const [id, setId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState(CREATE);
  const [imageurl, setImageurl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params && route.params.msg === UPDATE) {
      const contactTarget = contacts.find(
        contact => contact.id === route.params.id,
      );
      if (contactTarget) {
        setId(contactTarget.id);
        setFirstname(contactTarget.firstName);
        setLastname(contactTarget.lastName);
        const intAge = contactTarget.age;
        setAge(intAge.toString());
        setImageurl(contactTarget.photo);
        setStatus(route.params.msg);
      }
    }
  }, [route.params]);

  const handlePostContact = () => {
    const newContact = {
      firstName: firstname,
      lastName: lastname,
      age: parseInt(age),
      photo: imageurl,
    };

    postContact(newContact)
      .then(response => {
        if (response === 201) {
          dispatch(reloadContacts());

          ToastAndroid.show('Contact added', ToastAndroid.LONG);
          navigation.navigate(HOME);
        }
      })
      .catch(_ => {
        ToastAndroid.show('an error occured', ToastAndroid.LONG);
      });
  };

  const handlePutContact = () => {
    const newContact = {
      firstName: firstname,
      lastName: lastname,
      age: parseInt(age),
      photo: imageurl,
    };

    putContact(newContact, id)
      .then(response => {
        if (response === 201) {
          dispatch(reloadContacts());

          ToastAndroid.show('Contact updated', ToastAndroid.LONG);
          navigation.navigate(HOME);
        }
      })
      .catch(_ => {
        ToastAndroid.show('an error occured', ToastAndroid.LONG);
      });
  };

  const validation = () => {
    let messageError = contactValidation(firstname, lastname, age, imageurl);
    if (!messageError && status === UPDATE) {
      handlePutContact();
    } else if (!messageError) {
      handlePostContact();
    } else {
      ToastAndroid.show(messageError, ToastAndroid.LONG);
    }
  };

  const handleFirstname = (text: string): void => {
    setFirstname(text);
  };

  const handleLastname = (text: string): void => {
    setLastname(text);
  };

  const handleAge = (ageValue: string): void => {
    setAge(ageValue);
  };

  const chooseFile = (type: string) => {
    launchImageLibrary({}, async response => {
      if (response && response.assets) {
        setLoading(true);
        const asset = response.assets[0];
        const reference = storage().ref(`/photos/${asset.fileName}`);

        await reference.putFile(asset.uri);
        const url = await reference.getDownloadURL();
        setImageurl(url);
        setLoading(false);
      }
    });
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Contact {status === UPDATE ? 'Update' : 'Add'}
          </Text>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.formBox}>
            <View style={styles.fieldBox}>
              <View style={styles.label}>
                <Text>First Name</Text>
              </View>
              <View style={styles.textInputField}>
                <TextInput
                  placeholder="first name"
                  value={firstname}
                  onChangeText={handleFirstname}
                />
              </View>
            </View>
            <View style={styles.fieldBox}>
              <View style={styles.label}>
                <Text>Last Name</Text>
              </View>
              <View style={styles.textInputField}>
                <TextInput
                  placeholder="last name"
                  value={lastname}
                  onChangeText={handleLastname}
                />
              </View>
            </View>
            <View style={styles.fieldBox}>
              <View style={styles.label}>
                <Text>Age</Text>
              </View>
              <View style={styles.textInputField}>
                <TextInput
                  placeholder="age"
                  value={age}
                  onChangeText={handleAge}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.fieldBox}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={() => chooseFile('photo')}>
                <Text>Choose Image File</Text>
              </TouchableOpacity>
              {loading ? (
                <ActivityIndicator
                  animating={true}
                  size="small"
                  color="#0000ff"
                />
              ) : (
                <View style={styles.label}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: imageurl,
                    }}
                  />
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => validation()}
              style={styles.btn}
              activeOpacity={0.8}>
              <Text>{status === UPDATE ? 'SAVE' : 'ADD'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactAdd;
