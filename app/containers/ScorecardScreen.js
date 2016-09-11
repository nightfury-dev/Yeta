import * as _ from 'lodash';
import React from 'react';
import { ListView } from 'react-native';

import ScorecardHeader from '../components/ScorecardHeader';
import ScorecardRow from '../components/ScorecardRow';
import ScorecardFooter from '../components/ScorecardFooter';
import styles from './styles/ContainerStyles';


class ScorecardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }
    createRowData() {
        const course = this.props.game.course;
        const players = this.props.game.players;
        return _.values(course.holes).map((hole) => {
            const currentHoleScores = _.values(players).map((player) => {
                const score = _.find(
                    _.values(this.props.game.scores),
                    (s) => s.hole.holenumber === hole.holenumber &&
                           s.player.id === player.id
                );
                return score.score;
            });
            return {
                holeNumber: hole.holenumber,
                scores: currentHoleScores
            };
        });
    }

    renderRow(rowData) {
        const hole = _.find(
            _.values(this.props.game.course.holes),
            (h) => h.holenumber === rowData.holeNumber
        );
        return (<ScorecardRow
          holeNumber={rowData.holeNumber}
          par={hole.par}
          scores={rowData.scores}
        />);
    }

    renderFooter() {
        const totalScores = _.values(this.props.game.players).map(player => {
            const playerScores = _.filter(
                _.values(this.props.game.scores),
                (score) => score.player.id === player.id
            );
            return playerScores.reduce(
                (totalScore, score) => totalScore + score.score,
                0
            );
        });
        return (<ScorecardFooter
          course={this.props.game.course}
          scores={totalScores}
        />);
    }

    renderHeader() {
        return <ScorecardHeader players={_.values(this.props.game.players)} />;
    }

    render() {
        const ds = new ListView.DataSource(
            { rowHasChanged: (r1, r2) => r1 !== r2 }
        );
        const dataSource = ds.cloneWithRows(this.createRowData());
        return (<ListView
          style={styles.background}
          dataSource={dataSource}
          renderHeader={this.renderHeader}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
        />);
    }
}

ScorecardScreen.propTypes = {
    game: React.PropTypes.object.isRequired
};

export default ScorecardScreen;
