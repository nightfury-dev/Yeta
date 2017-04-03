import { StyleSheet } from 'react-native';

import { ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  centeredItem: ApplicationStyles.centeredItem,
  baseText: ApplicationStyles.baseText,
  listSeparator: ApplicationStyles.listSeparator,
  button: { ...ApplicationStyles.button }
});
