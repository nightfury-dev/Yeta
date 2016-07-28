import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


class ScoreGridElement extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.player.name}
                </Text>
                <NumberPicker
                    number={this.props.score}
                    numberIncreased={this.props.scoreIncreased.bind(this)}
                    numberDecreased={this.props.scoreDecreased.bind(this)}/>
            </View>
        );
    }
};

export default ScoreGridElement;
