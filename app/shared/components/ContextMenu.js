import React from 'react';

import Modal from './Modal';
import ModalButton from './ModalButton';


const ContextMenu = (props) => (
  <Modal visible={props.visible}>
    <ModalButton onPress={props.onDelete} text="Remove" />
    <ModalButton onPress={props.onClose} text="Close" />
  </Modal>
);

ContextMenu.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired
};

export default ContextMenu;
