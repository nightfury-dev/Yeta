import * as _ from 'lodash';
import React from 'react';
import { ListView } from 'react-native';

import ScorecardHeader from './ScorecardHeader';
import ScorecardRow from './ScorecardRow';
import ScorecardFooter from './ScorecardFooter';


class Scorecard extends React.Component {
    getCourse() {
        const game = this.getGame();
        return _.find(
            this.props.courses,
            (c) => { return c.id === game.course; }
        );
    }

    getGame() {
        return _.find(
            this.props.games,
            (g) => { return g.id === this.props.gameId; }
        );
    }

    renderHeader() {
        const game = this.getGame();
        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        );
        return <ScorecardHeader players={players} />
    }

    renderRow(rowData) {
        const course = this.getCourse();
        const par = course.pars[rowData.holeNumber - 1];
        return <ScorecardRow
            holeNumber={rowData.holeNumber}
            par={par}
            scores={rowData.scores} />
    }

    renderFooter() {
        const course = this.getCourse();
        const game = this.getGame();

        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        );

        const totalScores = players.map(player => {
            return game.scores[player.id].reduce(
                (score, totalScore) => score + totalScore,
                0
            );
        });

        return <ScorecardFooter course={course} scores={totalScores} />;
    }

    createRowData() {
        const course = this.getCourse();
        const game = this.getGame();

        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        );

        return course.pars.map((par, index) => {
            const currentHoleScores = players.map((player) => {
                return game.scores[player.id][index];
            });
            return {
                holeNumber: index + 1,
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
