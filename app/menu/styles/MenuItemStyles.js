import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../themes';


export default StyleSheet.create({
  menuItemText: {
    color: Colors.text,
    textAlign: 'center',
    fontSize: Fonts.size.normal,
    fontFamily: Fonts.defaultFontFamily
  },
  menuItem: {
    margin: 5,
    backgroundColor: Colors.orange,
  }
});
