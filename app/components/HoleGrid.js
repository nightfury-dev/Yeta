import React from 'react';
import { View } from 'react-native';

import HoleGridElement from './HoleGridElement';


class HoleGrid extends React.Component {
    constructor(props) {
        super(props);
        this.parIncreased = this.parIncreased.bind(this);
        this.parDecreased = this.parDecreased.bind(this);
    }
    parIncreased(index) {
        this.updatePars(index, this.props.pars[index] + 1);
    }

    parDecreased(index) {
        this.updatePars(index, this.props.pars[index] - 1);
    }

    updatePars(index, newPar) {
        const newPars = [
            ...this.props.pars.slice(0, index),
            newPar,
            ...this.props.pars.slice(index + 1)
        ];
        this.props.onParsChanged(newPars);
    }

    render() {
        const gridElements = this.props.pars.map((par, index) =>
          <HoleGridElement
            par={par}
            key={index}
            holeNumber={index + 1}
            onParIncreased={() => this.parIncreased(index)}
            onParDecreased={() => this.parDecreased(index)}
          />
        );
        return (
          <View>
              {gridElements}
          </View>
        );
    }
}

HoleGrid.propTypes = {
    pars: React.PropTypes.array.isRequired,
    onParsChanged: React.PropTypes.func.isRequired
};

export default HoleGrid;
