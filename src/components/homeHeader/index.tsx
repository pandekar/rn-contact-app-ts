import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';

import styles from './homeHeader.styles';

import type {Props} from './homeHeader.types';

/**
 * Home header
 * @param {Props} props - Home header props
 * @returns {React.JSX.Element}
 */
const HomeHeader = ({
  refreshContacts,
  createContact,
}: Props): React.JSX.Element => (
  <View style={styles.header}>
    <View>
      <TouchableOpacity>
        <Icon
          name="rotate"
          size={30}
          color="white"
          onPress={() => refreshContacts()}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.headerText}>Contact List</Text>
    <View>
      <TouchableOpacity>
        <Icon
          name="plus"
          size={30}
          color="white"
          onPress={() => createContact()}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default HomeHeader;
