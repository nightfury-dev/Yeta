import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centeredItem: ApplicationStyles.centeredItem,
  baseText: ApplicationStyles.baseText,
  listSeparator: ApplicationStyles.listSeparator,
  button: { ...ApplicationStyles.button },
  row: {
    backgroundColor: Colors.background
  }
});
