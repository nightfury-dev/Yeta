import React from 'react';
import { Modal, View } from 'react-native';
import { Button } from 'native-base'

import styles from './styles/ComponentStyles';


function ContextMenu(props) {
    return (<Modal
      animationType={"slide"}
      transparent
      visible={props.visible}
    >
      <View style={styles.modal}>
        <View style={styles.modalInnerContainer}>
          <Button block style={styles.modalButton} onPress={props.onDelete}>
            Remove
          </Button>
          <Button block style={styles.modalButton} onPress={props.onClose}>
            Close
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
