import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

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
  visible: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};


export default Confirmation;
