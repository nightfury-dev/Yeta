import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class NumberPicker extends React.Component {
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.props.numberIncreased.bind(this)}>
                    <Text>Increase</Text>
                </TouchableHighlight>
                <Text>{this.props.number}</Text>
                <TouchableHighlight onPress={this.props.numberDecreased.bind(this)}>
                    <Text>Decrease</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default NumberPicker;
