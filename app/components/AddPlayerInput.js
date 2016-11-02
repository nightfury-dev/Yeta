import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'native-base';

import styles from './styles/AddPlayerInputStyles';


class AddPlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (<View style={styles.container}>
          <Input
            placeholder="Player name"
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <Button
            onPress={() => this.props.onSave(this.state.name)}
            style={styles.button}
          >
            Save
          </Button>
          <Button
            onPress={this.props.onCancel}
            style={styles.button}
          >
            Cancel
          </Button>
        </View>);
    }
}

AddPlayerInput.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired
};

export default AddPlayerInput;
