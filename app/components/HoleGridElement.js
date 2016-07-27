import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class HoleGridElement extends React.Component {
    increasePar() {
        this.props.onParIncreased();
    }

    decreasePar() {
        if (this.props.par > 1) {
            this.props.onParDecreased();
        }
    }

    render() {
        return (
            <View>
                <Text>Hole #{this.props.holeNumber}: {this.props.par}</Text>
                <TouchableHighlight onPress={this.increasePar.bind(this)}>
                    <Text>Increase</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.decreasePar.bind(this)}>
                    <Text>Decrease</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default HoleGridElement;
