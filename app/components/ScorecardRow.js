import React from 'react';
import { Text, View } from 'react-native';

import ScorecardEntry from './ScorecardEntry';
import styles from '../styles/styles';


class ScorecardRow extends React.Component {
    render() {
        let firstCell = this.props.holeNumber + ' (' + this.props.par + ')';
        return <ScorecardEntry
            collection={this.props.scores}
            getContent={(score) => score}
            firstCellContent={firstCell}/>;
    }
};

export default ScorecardRow;
