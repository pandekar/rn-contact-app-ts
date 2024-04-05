import {StyleSheet} from 'react-native';

import {colorConstants} from '../../constants';

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    margin: 10,
  },
  contact: {
    padding: 15,
    margin: 10,
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: colorConstants.secondary,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 20,
  },
  itemContent: {
    alignContent: 'flex-start',
  },
});

export default styles;
