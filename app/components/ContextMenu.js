import React from 'react';
import { Modal, Text, View } from 'react-native';

import Button from './Button';
import styles from '../styles/styles';

const modalStyle = {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center'
};

const innerContainer = {
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 20,
    overflow: 'hidden'
};


function ContextMenu(props) {
    return (<Modal
      animationType={"slide"}
      transparent
      visible={props.visible}
    >
      <View style={modalStyle}>
        <View style={innerContainer}>
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
