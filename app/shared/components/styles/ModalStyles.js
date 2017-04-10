import { StyleSheet } from 'react-native';

import { Colors } from '../../../themes';


export default StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center'
  },
  modalInnerContainer: {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: Colors.modalBackground,
    padding: 20,
    overflow: 'hidden',
    margin: 25
  },
});
