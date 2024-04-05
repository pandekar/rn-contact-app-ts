import {StyleSheet} from 'react-native';

import {colorConstants} from '../../constants';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  listBox: {
    flex: 1,
  },
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
  logo: {
    width: 66,
    height: 58,
  },
  itemContent: {
    alignContent: 'flex-start',
  },
});

export default styles;
