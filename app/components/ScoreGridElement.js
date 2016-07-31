import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


const style = {
    flex: 1,
    flexDirection: 'row'
};

class ScoreGridElement extends React.Component {
    render() {
        return (
            <View style={style}>
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
