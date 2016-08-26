import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/styles';


class ScorecardRow extends React.Component {
    render() {
        const holeScores = this.props.scores.map(
            (score, index) => <Text key={index}>{score}</Text>
        );
        return (
            <View style={styles.scoreCardRow}>
                <Text>{this.props.holeNumber} ({this.props.par})</Text>
                {holeScores}
            </View>
        );
    }
};

export default ScorecardRow;
