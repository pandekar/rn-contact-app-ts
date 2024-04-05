import {StyleSheet} from 'react-native';

import {colorConstants} from '../../constants';

const styles = StyleSheet.create({
  header: {
    paddingLeft: 40,
    paddingRight: 40,
    height: 60,
    backgroundColor: colorConstants.primary,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
