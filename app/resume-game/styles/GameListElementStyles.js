import { StyleSheet } from 'react-native';

import { ApplicationStyles, ColorPalette } from '../../themes';

export default StyleSheet.create({
  listItem: {
    ...ApplicationStyles.listItem,
    flexDirection: 'row'
  },
  selectedListItem: ApplicationStyles.selectedListItem,
  row: {
    backgroundColor: ColorPalette.background
  }
});
