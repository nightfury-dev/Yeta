import * as _ from 'lodash';
import React from 'react';
import { ListView } from 'react-native';

import ScorecardHeader from './ScorecardHeader';
import ScorecardRow from './ScorecardRow';
import ScorecardFooter from './ScorecardFooter';


class Scorecard extends React.Component {
    renderHeader() {
        return <ScorecardHeader players={_.values(this.props.game.players)} />
    }

    renderRow(rowData) {
        const hole = _.find(
            _.values(this.props.game.course.holes),
            (hole) => { return hole.holenumber === rowData.holeNumber; }
        );
        return <ScorecardRow
            holeNumber={rowData.holeNumber}
            par={hole.par}
            scores={rowData.scores} />
    }

    renderFooter() {
        const totalScores = _.values(this.props.game.players).map(player => {
            const playerScores = _.filter(
                _.values(this.props.game.scores),
                (score) => { return score.player.id === player.id; }
            );
            return playerScores.reduce(
                (totalScore, score) => totalScore + score.score,
                0
            );
        });

        return <ScorecardFooter course={this.props.game.course} scores={totalScores} />;
    }

    createRowData() {
        const course = this.props.game.course;
        const game = this.props.game;
        const players = this.props.game.players;

        return _.values(course.holes).map((hole) => {
            const currentHoleScores = _.values(players).map((player) => {
                const score = _.find(
                    _.values(this.props.game.scores),
                    (score) => { return score.hole.holenumber === hole.holenumber && score.player.id === player.id; }
                );
                return score.score;
            });
            return {
                holeNumber: hole.holenumber,
                scores: currentHoleScores
            };
        });
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ds.cloneWithRows(this.createRowData());
        return (
            <ListView
                dataSource={dataSource}
                renderHeader={this.renderHeader.bind(this)}
                renderRow={this.renderRow.bind(this)}
                renderFooter={this.renderFooter.bind(this)}/>
        );
    }
};

export default Scorecard;
