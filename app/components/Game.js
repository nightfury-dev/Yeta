import React from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';


class Game extends React.Component {
    render() {
        const players = this.props.players.map((p) => <Text>- {p.name}</Text>);
        return (
            <View>
                <Text>Course: {this.props.course.name}</Text>
                <Text>Players:</Text>
                {players}
            </View>
        );
    }
};

export default Game;
