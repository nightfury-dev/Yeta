import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';

import HoleSwitcher from './HoleSwitcher';


class Game extends React.Component {
    changeHole(newHole) {
        const course = this.getCourse();
        if (newHole > 0 && newHole <= course.pars.length) {
            this.props.updateHole(this.props.game.id, newHole);
        }
    }

    getCourse() {
        return _.find(
            this.props.courses,
            (c) => { return c.id === this.props.game.course; }
        );
    }

    render() {
        const game = this.props.game;

        const course = this.getCourse();

        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        )

        const playerList = players.map((p) => <Text>{p.name}</Text>);

        return (
            <View>
                <HoleSwitcher
                    currentHole={game.currentHole}
                    holeChanged={this.changeHole.bind(this)} />
                <Text>
                    Render game in {course.name} ({game.timeBegin.toString()})
                </Text>
                {playerList}
            </View>
        );
    }
};

export default Game;
