import * as _ from 'lodash';
import React from 'react';
import { ListView } from 'react-native';

import ScorecardHeader from './ScorecardHeader';
import ScorecardRow from './ScorecardRow';


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
        return <ScorecardRow
            holeNumber={rowData.holeNumber}
            scores={rowData.scores} />
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
                renderRow={this.renderRow} />
        );
    }
};

export default Scorecard;
