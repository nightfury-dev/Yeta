import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  listItem: {
    ...ApplicationStyles.listItem,
    flexDirection: 'row'
  },
  selectedListItem: ApplicationStyles.selectedListItem,
  row: {
    backgroundColor: Colors.background
  }
});
