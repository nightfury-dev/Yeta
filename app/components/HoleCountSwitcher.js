import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import NumberPicker from './NumberPicker';


class HoleCountSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holeCount: 9
        };
    }

    increaseHoles() {
        this.setState({
            holeCount: this.state.holeCount + 1
        });
        this.props.holeCountIncreased();
    }

    decreaseHoles() {
        if (this.state.holeCount > 1) {
            this.setState({
                holeCount: this.state.holeCount - 1
            });
            this.props.holeCountDecreased();
        }
    }

    render() {
        return (
            <View>
                <NumberPicker
                    number={this.state.holeCount}
                    additionalText={'No. of holes:'}
                    numberIncreased={this.increaseHoles.bind(this)}
                    numberDecreased={this.decreaseHoles.bind(this)}/>
            </View>
        );
    }
};

export default HoleCountSwitcher;
