import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  footer: {
    flex: 1,
    backgroundColor: Colors.background
  }
});
