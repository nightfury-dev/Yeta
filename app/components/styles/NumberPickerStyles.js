import { StyleSheet } from 'react-native';

import { ApplicationStyles } from '../../themes';


export default StyleSheet.create({
  baseText: ApplicationStyles.baseText,
  row: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
