import * as _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/styles';


class ScorecardFooter extends React.Component {
    render() {
        const coursePar = _.values(this.props.course.holes).reduce(
            (hole, total) => hole.par + total,
            0
        );
        const scores = this.props.scores.map((score) => {
            const diff = score - coursePar;
            return <Text>{score} ({diff > 0 ? ('+' + diff) : diff})</Text>;
        });
        return (
            <View style={styles.scoreCardRow}>
                <Text>({coursePar})</Text>
                {scores}
            </View>
        );
    }
};

export default ScorecardFooter;
