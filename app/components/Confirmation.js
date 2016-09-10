import React from 'react';
import { Text, View, Modal } from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


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
            onPress={() => props.onConfirm()}
            text={'Confirm'}
          />
          <Button onPress={props.onCancel} text={'Cancel'} />
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
