import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Button from './Button';


class Confirmation extends React.Component {
    cancel() {
        this.props.navigator.pop();
    }

    confirm() {
        this.props.onConfirm(this.props.payload);
        this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <Text>{this.props.message}</Text>
                <Button text={'Accept'} onPress={this.confirm.bind(this)} />
                <Button text={'Cancel'} onPress={this.cancel.bind(this)} />
            </View>
        );
    }
};

export default Confirmation;
