import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';


class Game extends React.Component {
    render() {
        const game = this.props.game;

        const course = _.find(
            this.props.courses,
            (c) => { return c.id === game.course; }
        );

        const players = _.filter(
            this.props.players,
            (p) => { return _.some(game.players, (id) => p.id == id) }
        )

        const playerList = players.map((p) => <Text>{p.name}</Text>);

        return (
            <View>
                <Text>
                    Render game in {course.name} ({game.timeBegin.toString()})
                </Text>
                {playerList}
            </View>
        );
    }
};

export default Game;
