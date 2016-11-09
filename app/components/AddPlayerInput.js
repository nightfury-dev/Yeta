import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { Button, Input } from 'native-base';

import { addPlayer, hideAddPlayerDialog } from '../actions/actionCreators';
import styles from './styles/AddPlayerInputStyles';


class AddPlayerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer() {
        this.props.addPlayer(this.state.name);
        this.props.hideAddPlayerDialog();
    }

    render() {
        const addButtonStyle = this.state.name.length > 0
            ? styles.button
            : styles.disabledButton;
        return (<View style={styles.container}>
          <Input
            placeholder="Player name"
            autoFocus
            style={styles.input}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <Button
            onPress={this.addPlayer}
            disabled={this.state.name.length === 0}
            style={addButtonStyle}
          >
            Save
          </Button>
          <Button
            onPress={() => this.props.hideAddPlayerDialog()}
            style={styles.button}
          >
            Cancel
          </Button>
        </View>);
    }
}

AddPlayerInput.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onCancel: React.PropTypes.func.isRequired,
    addPlayer: React.PropTypes.func.isRequired,
    hideAddPlayerDialog: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    addPlayer: bindActionCreators(addPlayer, dispatch),
    hideAddPlayerDialog: bindActionCreators(hideAddPlayerDialog, dispatch),
});


export default connect(null, mapDispatchToProps)(AddPlayerInput);
