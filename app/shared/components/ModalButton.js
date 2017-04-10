import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/ModalButtonStyles';


const ModalButton = (props) => (
  <Button
    block
    style={StyleSheet.flatten(styles.modalButton)}
    onPress={props.onPress}
  >
    <Text style={styles.baseText}>{props.text}</Text>
  </Button>
);

ModalButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired
};

export default ModalButton;
