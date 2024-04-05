import {StyleSheet} from 'react-native';

import {colorConstants} from '../../constants';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke',
  },
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    height: 30,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    backgroundColor: colorConstants.primary,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  mainBox: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 24,
  },
  formBox: {
    height: 600,
    width: 350,
    padding: 4,
    color: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#337CCF',
    borderRadius: 25,
  },
  fieldBox: {
    alignItems: 'flex-start',
  },
  label: {
    marginVertical: 12,
  },
  textInputField: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 12,
    padding: 2,
    width: 250,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
    elevation: 8,
    backgroundColor: colorConstants.thirdary,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 250,
    height: 40,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: colorConstants.thirdary,
    padding: 5,
    marginVertical: 10,
    width: 250,
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 20,
  },
});

export default styles;
