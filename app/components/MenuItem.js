import React from 'react';
import {
  Text,
  TouchableHighlight,
  Navigator
} from 'react-native';


class MenuItem extends React.Component {
    navigate(name) {
        this.props.navigator.push({name});
    }

    render() {
        return (
            <TouchableHighlight onPress={this.navigate.bind(this, this.props.name)}>
                <Text>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
};

export default MenuItem;
