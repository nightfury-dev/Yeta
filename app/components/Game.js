import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import HoleSwitcher from './HoleSwitcher';
import ScoreGrid from './ScoreGrid';
import styles from '../styles/styles';


class Game extends React.Component {
    changeHole(newHole) {
        const course = this.getCourse();
        const game = this.getGame();
        if (newHole > 0 && newHole <= course.pars.length) {
            this.props.updateHole(game.id, newHole);
        }
    }

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

    showScorecard() {
        const game = this.getGame();
        this.props.navigator.push({
            name: 'scorecard',
            gameId: game.id
        });
    }

    render() {
        const game = this.getGame();

        const course = this.getCourse();

        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        )

        return (
            <View style={styles.background}>
                <HoleSwitcher
                    currentHole={game.currentHole}
                    holeChanged={this.changeHole.bind(this)} />
                <Text>
                    Render game in {course.name} ({game.timeBegin.toString()})
                </Text>
                <ScoreGrid
                    {...this.props}
                    game={game.id}
                    course={course}
                    players={players}
                    scores={game.scores}
                    hole={game.currentHole}/>

                <TouchableHighlight onPress={this.showScorecard.bind(this)}>
                    <Text>Show scorecard</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

export default Game;
