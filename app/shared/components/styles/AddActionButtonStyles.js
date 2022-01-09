import { StyleSheet } from 'react-native';

import { ApplicationStyles, ColorPalette } from '../../../themes';


export default StyleSheet.create({
  button: {
    ...ApplicationStyles.button,
    backgroundColor: ColorPalette.secondary.default
  }
});
