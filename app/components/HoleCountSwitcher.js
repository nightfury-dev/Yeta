import React from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';


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
                <TouchableHighlight onPress={this.increaseHoles.bind(this)}>
                    <Text>Increase</Text>
                </TouchableHighlight>
                <Text>No. of holes: {this.state.holeCount}</Text>
                <TouchableHighlight onPress={this.decreaseHoles.bind(this)}>
                    <Text>Decrease</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default HoleCountSwitcher;
