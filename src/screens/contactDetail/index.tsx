import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './contactDetail.styles';

import type {Contact} from '../../types/index.types';

const ContactDetail = (): React.JSX.Element => {
  const route = useRoute();
  const contact = route.params as Contact;

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Detail</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.loginFormBox}>
          <View>
            {contact.photo !== 'N/A' ? (
              <Image
                style={styles.image}
                source={{
                  uri: contact.photo,
                }}
              />
            ) : (
              <Image
                style={styles.image}
                source={require('../../images/unknown.png')}
              />
            )}
          </View>
          <View style={styles.fieldBox}>
            <View style={styles.label}>
              <Text style={styles.detailText}>
                First name : {contact.firstName}
              </Text>
            </View>
          </View>
          <View style={styles.fieldBox}>
            <View style={styles.label}>
              <Text style={styles.detailText}>
                Last name : {contact.lastName}
              </Text>
            </View>
          </View>
          <View style={styles.fieldBox}>
            <View style={styles.label}>
              <Text style={styles.detailText}>Age : {contact.age}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;
