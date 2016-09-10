import React from 'react';
import { Modal, View } from 'react-native';

import Button from './Button';
import styles from '../styles/styles';


function ContextMenu(props) {
    return (<Modal
      animationType={"slide"}
      transparent
      visible={props.visible}
    >
      <View style={styles.modal}>
        <View style={styles.modalInnerContainer}>
          <Button onPress={props.onDelete} text={'Remove'} />
          <Button onPress={props.onClose} text={'Close'} />
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
