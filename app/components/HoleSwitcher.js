import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


const marginStyle = {
    marginTop: 10,
    marginBottom: 10
};

class HoleSwitcher extends React.Component {
    previousHole() {
        this.props.holeChanged(this.props.currentHole - 1);
    }

    nextHole() {
        this.props.holeChanged(this.props.currentHole + 1);
    }

    render() {
        return (
            <View style={marginStyle}>
                <NumberPicker
                    number={this.props.currentHole}
                    additionalText={'Hole:'}
                    numberIncreased={this.nextHole.bind(this)}
                    numberDecreased={this.previousHole.bind(this)}/>
            </View>
        );
    }
};

export default HoleSwitcher;
