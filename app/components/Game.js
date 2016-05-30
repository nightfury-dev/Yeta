import React from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';

import SelectPlayers from './SelectPlayers';


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'selectPlayers'
        };
    }

    playersSelected(selectedPlayers) {
        this.setState({
            selectedPlayers,
            currentState: 'selectCourse'
        });
    }

    render() {
        var component;
        switch (this.state.currentState) {
            case 'selectPlayers':
                component = (<SelectPlayers {...this.props}
                                playersSelected={this.playersSelected.bind(this)} />);
                break;
            default:
                component = (<Text>Pick players, then select course and start the game.</Text>);
                break;
        }
        return (
            <View>
                {component}
            </View>
        );
    }
};

export default Game;
