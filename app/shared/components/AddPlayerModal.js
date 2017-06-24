import React from 'react';
import { InputGroup, Input } from 'native-base';

import Modal from './Modal';
import ModalButton from './ModalButton';

class AddPlayerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    const { visible, onSave, onCancel } = this.props;
    return (
      <Modal visible={visible}>
        <InputGroup>
          <Input
            autoFocus
            placeholder="Player name..."
            onChangeText={(name) => this.setState({ name })}
          />
        </InputGroup>
        <ModalButton onPress={() => onSave(this.state.name)} text="Save" />
        <ModalButton onPress={onCancel} text="Cancel" />
      </Modal>
    );
  }
}

AddPlayerModal.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired
};


export default AddPlayerModal;
