import * as _ from 'lodash';
import React from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';

import SelectPlayers from './SelectPlayers';
import SelectCourse from './SelectCourse';
import Game from './Game';
import store from '../store';


class InitGame extends React.Component {
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

    courseSelected(selectedCourse) {
        this.props.createGame(
            selectedCourse.id,
            this.state.selectedPlayers.map((p) => p.id)
        );
        this.setState({
            previousGames: this.props.games,
            currentState: 'startGame'
        });
    }

    render() {
        let component;
        switch (this.state.currentState) {
            case 'selectPlayers':
                component = (<SelectPlayers {...this.props}
                    playersSelected={this.playersSelected.bind(this)} />);
                break;
            case 'selectCourse':
                component = (<SelectCourse {...this.props}
                    courseSelected={this.courseSelected.bind(this)} />);
                break;
            case 'startGame':
                // Figure out how to do this correctly... I'd like to call
                // this.props.navigator.push({name: 'game', game: createGame})
                let newGame = _.difference(
                    this.props.games,
                    this.state.previousGames
                )[0];
                component = (<Game {...this.props} game={newGame} />);
                break;
        }
        return (
            <View>
                {component}
            </View>
        );
    }
};

export default InitGame;
