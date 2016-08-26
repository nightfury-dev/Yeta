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
import Button from './Button';
import styles from '../styles/styles';

const horizontalLine = {
    borderStyle: 'solid',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#DF878B'
};


class Game extends React.Component {
    changeHole(newHole) {
        const game = this.props.game;
        if (newHole > 0 && newHole <= game.course.holes.length) {
            this.props.updateHole(game.id, newHole);
        }
    }

    getCourse() {
        const game = this.props.game;
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
        const game = this.props.game;
        this.props.navigator.push({
            name: 'scorecard',
            game: game
        });
    }

    render() {
        const game = this.props.game;
        const course = game.course;
        const players = game.players;

        return (
            <View style={styles.background}>
                <HoleSwitcher
                    currentHole={game.currentHole}
                    holeChanged={this.changeHole.bind(this)} />

                <View style={horizontalLine}></View>

                <ScoreGrid
                    {...this.props}
                    gameId={game.id}
                    course={course}
                    players={players}
                    scores={game.scores}
                    hole={game.currentHole}/>

                <Button
                    text={'Show scorecard'}
                    onPress={this.showScorecard.bind(this)} />
            </View>
        );
    }
};

export default Game;
