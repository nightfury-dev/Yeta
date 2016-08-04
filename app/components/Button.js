import React from 'react';
import { Text, TouchableHighlight } from 'react-native';


class Button extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
};

export default Button;
