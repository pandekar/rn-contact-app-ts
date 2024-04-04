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
    backgroundColor: colorConstants.secondary,
    width: '100%',
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingTop: 24,
  },
  loginFormBox: {
    height: 600,
    width: 350,
    padding: 4,
    color: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF5E2',
    borderRadius: 25,
  },
  fieldBox: {
    alignItems: 'flex-start',
  },
  label: {
    marginVertical: 12,
  },
  detailText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
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
    backgroundColor: '#13ECE3',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: 250,
    height: 40,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 25,
    // marginRight: 20
  },
});

export default styles;
