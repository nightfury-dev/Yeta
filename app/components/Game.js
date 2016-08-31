import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HoleSwitcher from './HoleSwitcher';
import ScoreGrid from './ScoreGrid';
import Button from './Button';
import styles from '../styles/styles';
import SwipeView from './SwipeView';
import GameHeader from './GameHeader';


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

    previousHole() {
        this.changeHole(this.props.game.currentHole - 1);
    }

    nextHole() {
        this.changeHole(this.props.game.currentHole + 1);
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

    render() {
        const game = this.props.game;
        const course = game.course;
        const players = game.players;

        return (
            <SwipeView
                style={styles.background}
                onRightSwipe={this.nextHole.bind(this)}
                onLeftSwipe={this.previousHole.bind(this)}>

                <GameHeader {...this.props} />

                <View style={horizontalLine}></View>

                <ScoreGrid
                    {...this.props}
                    gameId={game.id}
                    course={course}
                    players={players}
                    scores={game.scores}
                    hole={game.currentHole}/>
            </SwipeView>
        );
    }
};

export default Game;
