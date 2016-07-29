import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


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
                <NumberPicker
                    number={this.props.currentHole}
                    numberIncreased={this.nextHole.bind(this)}
                    numberDecreased={this.previousHole.bind(this)}/>
            </View>
        );
    }
};

export default HoleSwitcher;
