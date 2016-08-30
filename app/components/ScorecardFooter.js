import * as _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';

import ScorecardEntry from './ScorecardEntry';
import styles from '../styles/styles';


class ScorecardFooter extends React.Component {
    render() {
        const coursePar = _.values(this.props.course.holes).reduce(
            (total, hole) => hole.par + total,
            0
        );
        let getTotalScore = (score) => {
            const diff = score - coursePar;
            const diffStr = (diff > 0 ? ('+' + diff) : diff);
            return score + '(' + diffStr + ')';
        };
        return <ScorecardEntry
            collection={this.props.scores}
            getContent={getTotalScore}
            firstCellContent={'(' + coursePar+ ')'}/>;
    }
};

export default ScorecardFooter;
