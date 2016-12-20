import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  input: ApplicationStyles.input,
  centeredItem: ApplicationStyles.centeredItem,
  listSeparator: ApplicationStyles.listSeparator,
  button: { backgroundColor: Colors.orange }
});
