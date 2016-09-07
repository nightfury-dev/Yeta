import React from 'react';
import { View } from 'react-native';

import NumberPicker from './NumberPicker';


const marginStyle = {
    marginTop: 10,
    marginBottom: 10
};

class HoleSwitcher extends React.Component {
    constructor(props) {
        super(props);
        this.nextHole = this.nextHole.bind(this);
        this.previousHole = this.previousHole.bind(this);
    }

    previousHole() {
        this.props.holeChanged(this.props.currentHole - 1);
    }

    nextHole() {
        this.props.holeChanged(this.props.currentHole + 1);
    }

    render() {
        return (<View style={marginStyle}>
          <NumberPicker
            number={this.props.currentHole}
            additionalText={'Hole:'}
            numberIncreased={this.nextHole}
            numberDecreased={this.previousHole}
          />
        </View>);
    }
}

HoleSwitcher.propTypes = {
    holeChanged: React.PropTypes.func.isRequired,
    currentHole: React.PropTypes.number.isRequired
};

export default HoleSwitcher;
