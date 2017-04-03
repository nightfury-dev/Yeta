import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/ConfirmationStyles';


function Confirmation(props) {
  return (<Modal
    animationType={'slide'}
    transparent
    visible={props.visible}
  >
    <View style={styles.modal}>
      <View style={styles.modalInnerContainer}>
        <Text>{props.message}</Text>
        <Button
          block
          style={StyleSheet.flatten(styles.modalButton)}
          onPress={() => props.onConfirm()}
        >
          <Text style={styles.baseText}>Confirm</Text>
        </Button>
        <Button block style={StyleSheet.flatten(styles.modalButton)} onPress={props.onCancel}>
          <Text style={styles.baseText}>Cancel</Text>
        </Button>
      </View>
    </View>
  </Modal>);
}

Confirmation.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onConfirm: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired
};


export default Confirmation;
