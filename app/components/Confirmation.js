import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Button from './Button';


class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.confirm = this.confirm.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.props.navigator.pop();
    }

    confirm() {
        this.props.onConfirm(this.props.payload);
        this.props.navigator.pop();
    }

    render() {
        return (<View>
          <Text>{this.props.message}</Text>
          <Button text={'Accept'} onPress={this.confirm} />
          <Button text={'Cancel'} onPress={this.cancel} />
        </View>);
    }
}

Confirmation.propTypes = {
    navigator: React.PropTypes.object.isRequired,
    onConfirm: React.PropTypes.func.isRequired,
    payload: React.PropTypes.any,
    message: React.PropTypes.string.isRequired
};


export default Confirmation;
