import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  baseText: ApplicationStyles.baseText,
  orderText: {
    ...ApplicationStyles.baseText,
    color: 'skyblue',
    padding: 10,
    textAlign: 'left'
  },
  nameText: {
    ...ApplicationStyles.baseText,
    textAlign: 'left'
  },
  row: {
    flex: 10,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#DF878B',
    alignItems: 'center'
  },
  button: {
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange
  },
});
