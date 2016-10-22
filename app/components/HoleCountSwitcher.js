import React from 'react';
import { View } from 'react-native';

import NumberPicker from './NumberPicker';


class HoleCountSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            holeCount: props.holecount
        };

        this.increaseHoles = this.increaseHoles.bind(this);
        this.decreaseHoles = this.decreaseHoles.bind(this);
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
        return (<View>
          <NumberPicker
            number={this.state.holeCount}
            additionalText={'No. of holes:'}
            numberIncreased={this.increaseHoles}
            numberDecreased={this.decreaseHoles}
          />
        </View>);
    }
}

HoleCountSwitcher.propTypes = {
    holeCountIncreased: React.PropTypes.func.isRequired,
    holeCountDecreased: React.PropTypes.func.isRequired,
    holecount: React.PropTypes.number.isRequired
};

export default HoleCountSwitcher;
