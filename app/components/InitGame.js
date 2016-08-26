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
import styles from '../styles/styles';


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
            _.values(this.state.selectedPlayers).map((player) => player.id),
            _.values(selectedCourse.holes).map((hole) => hole.par),
            (game) => {
                this.props.navigator.replace({name: 'game', game});
            }
        );
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
        }
        return (
            <View style={styles.background}>
                {component}
            </View>
        );
    }
};

export default InitGame;
