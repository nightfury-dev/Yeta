import React from 'react';
import { Text } from 'react-native';

import Modal from './Modal';
import ModalButton from './ModalButton';


const Confirmation = (props) => (
  <Modal visible={props.visible}>
    <Text>{props.message}</Text>
    <ModalButton onPress={props.onConfirm} text="Confirm" />
    <ModalButton onPress={props.onCancel} text="Cancel" />
  </Modal>
);

Confirmation.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onConfirm: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired
};


export default Confirmation;
