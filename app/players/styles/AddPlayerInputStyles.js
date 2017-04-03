import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';


export default StyleSheet.create({
  input: {
    ...ApplicationStyles.input,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  button: { ...ApplicationStyles.button },
  disabledButton: {
    backgroundColor: Colors.lightOrange
  },
  baseText: { ...ApplicationStyles.baseText },
  container: {
    // flexDirection: asdfas'row',
        // marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightBrown
  }
});
