import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/ConfirmationStyles';


function Confirmation(props) {
    return (<Modal
      animationType={"slide"}
      transparent
      visible={props.visible}
    >
      <View style={styles.modal}>
        <View style={styles.modalInnerContainer}>
          <Text>{props.message}</Text>
          <Button
            block
            style={styles.modalButton}
            onPress={() => props.onConfirm()}
          >
            Confirm
          </Button>
          <Button block style={styles.modalButton} onPress={props.onCancel}>
            Cancel
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
