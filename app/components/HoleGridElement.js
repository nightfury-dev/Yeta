import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


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
                <Text>Hole #{this.props.holeNumber}</Text>
                <NumberPicker
                    number={this.props.par}
                    numberIncreased={this.increasePar.bind(this)}
                    numberDecreased={this.decreasePar.bind(this)}/>
            </View>
        );
    }
};

export default HoleGridElement;
