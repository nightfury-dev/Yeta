import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';


class HoleSwitcher extends React.Component {
    previousHole() {
        this.props.holeChanged(this.props.currentHole - 1);
    }

    nextHole() {
        this.props.holeChanged(this.props.currentHole + 1);
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.previousHole.bind(this)}>
                    <Text>-</Text>
                </TouchableHighlight>

                <Text>{this.props.currentHole}</Text>

                <TouchableHighlight onPress={this.nextHole.bind(this)}>
                    <Text>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default HoleSwitcher;
