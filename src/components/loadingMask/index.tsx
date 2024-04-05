import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './loadingMask.styles';

/**
 * Loading mask
 * @returns {React.JSX.Element} - component
 */
const LoadingMask = (): React.JSX.Element => {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyles}>Loading...</Text>
    </View>
  );
};

export default LoadingMask;
