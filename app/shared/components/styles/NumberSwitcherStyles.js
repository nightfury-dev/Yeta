import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../../themes';


export default StyleSheet.create({
  // button: ApplicationStyles.button,
  baseText: ApplicationStyles.baseText,
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    ...ApplicationStyles.button,
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
