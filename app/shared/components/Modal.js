import React from 'react';
import { View, Modal as RNModal } from 'react-native';

import styles from './styles/ModalStyles';


const Modal = (props) => (
  <RNModal animationType="slide" transparent visible={props.visible}>
    <View style={styles.modal}>
      <View style={styles.modalInnerContainer}>
        {props.children}
      </View>
    </View>
  </RNModal>
);

Modal.propTypes = {
  children: React.PropTypes.array,
  visible: React.PropTypes.bool.isRequired
};


export default Modal;
