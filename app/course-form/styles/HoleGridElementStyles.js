import { StyleSheet } from 'react-native';

import { ApplicationStyles } from '../../themes';

export default StyleSheet.create({
  baseText: {
    ...ApplicationStyles.baseText,
    textAlign: 'left',
    marginLeft: 10
  },
  row: {
    flex: 5,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
  }
});
