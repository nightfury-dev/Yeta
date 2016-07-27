import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import HoleGridElement from './HoleGridElement';


class HoleGrid extends React.Component {
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
            ...this.props.pars.slice(index+1)
        ];
        this.props.onParsChanged(newPars);
    }

    render() {
        const gridElements = this.props.pars.map((par, index) => {
            return <HoleGridElement
                par={par}
                holeNumber={index+1}
                onParIncreased={this.parIncreased.bind(this, index)}
                onParDecreased={this.parDecreased.bind(this, index)} />;
        });
        return (
            <View>
                {gridElements}
            </View>
        );
    }
};

export default HoleGrid;
