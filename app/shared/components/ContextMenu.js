import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import styles from './styles/ContextMenuStyles';


function ContextMenu(props) {
  return (<Modal
    animationType={'slide'}
    transparent
    visible={props.visible}
  >
    <View style={styles.modal}>
      <View style={styles.modalInnerContainer}>
        <Button block style={StyleSheet.flatten(styles.modalButton)} onPress={props.onDelete}>
          <Text style={styles.baseText}>Remove</Text>
        </Button>
        <Button block style={StyleSheet.flatten(styles.modalButton)} onPress={props.onClose}>
          <Text style={styles.baseText}>Close</Text>
        </Button>
      </View>
    </View>
  </Modal>);
}

ContextMenu.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired
};

export default ContextMenu;
