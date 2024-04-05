import * as React from 'react';
import {View, TouchableOpacity, Image, Text, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './contactList.styles';

import type {Props} from './contactList.types';

/**
 * Contact list
 * @param {Props} props - props
 * @returns {React.JSX.Element} - component
 */
const ContactList = ({
  contacts,
  readContact,
  updateContact,
  deleteAlert,
}: Props): React.JSX.Element => (
  <FlatList
    data={contacts}
    renderItem={({item}) => (
      <View style={styles.contact}>
        <TouchableOpacity onPress={() => readContact(item)}>
          <View>
            {item.photo !== 'N/A' ? (
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
);

export default ContactList;
