import { StyleSheet } from 'react-native';

import { ApplicationStyles, Colors } from '../../themes';

export default StyleSheet.create({
  baseText: ApplicationStyles.baseText,
  nameText: {
    textAlign: 'left',
    marginLeft: 10
  },
  orderText: {
    ...ApplicationStyles.baseText,
    color: 'skyblue',
    padding: 10
  },
  nameStyle: { flex: 6 },
  row: {
    flex: 7,
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
